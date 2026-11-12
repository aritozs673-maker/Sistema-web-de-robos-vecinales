-- ============================================================================
-- AlertaVecinal · Seguridad de reportes + estadísticas históricas por rol
-- Actualización incremental y repetible, sin borrar reportes ni usuarios.
-- Ejecutar DESPUÉS de schema.sql, upgrade_location_media.sql y
-- upgrade_interactive_dispatch.sql en Supabase SQL Editor.
-- ============================================================================

-- Evitar que el vecino modifique estados u otros campos de un reporte propio.
-- La policía puede actualizar el estado de incidentes asignados a su retén.
DROP POLICY IF EXISTS "incidents_update_owner_or_staff" ON public.incidents;
DROP POLICY IF EXISTS "incidents_update_staff" ON public.incidents;
CREATE POLICY "incidents_update_staff" ON public.incidents
FOR UPDATE TO authenticated
USING (
  public.is_admin() OR
  (public.current_app_role()='policia' AND
    (station_id=public.current_station_id() OR station_id IS NULL))
)
WITH CHECK (
  public.is_admin() OR
  (public.current_app_role()='policia' AND
    (station_id=public.current_station_id() OR station_id IS NULL))
);

-- No permitir crear reportes cerrados, sin coordenadas o para otro usuario.
DROP POLICY IF EXISTS "incidents_insert_own_neighbor" ON public.incidents;
CREATE POLICY "incidents_insert_own_neighbor" ON public.incidents
FOR INSERT TO authenticated WITH CHECK (
  public.current_app_role()='vecino' AND reporter_id=auth.uid()
  AND status='Activa' AND latitude IS NOT NULL AND longitude IS NOT NULL
);

-- Validar al INSERT sin modificar los registros antiguos, que pueden
-- tener direcciones o coordenadas incompletas.
CREATE OR REPLACE FUNCTION public.validate_new_incident()
RETURNS trigger LANGUAGE plpgsql SET search_path=public AS $$
BEGIN
  IF NEW.latitude IS NULL OR NEW.longitude IS NULL THEN
    RAISE EXCEPTION 'El reporte requiere una ubicación en el mapa';
  END IF;
  IF NEW.description IS NULL OR char_length(btrim(NEW.description)) NOT BETWEEN 12 AND 1500 THEN
    RAISE EXCEPTION 'La descripción debe tener de 12 a 1500 caracteres';
  END IF;
  IF NEW.address IS NULL OR char_length(btrim(NEW.address)) NOT BETWEEN 5 AND 160 THEN
    RAISE EXCEPTION 'Indica una referencia de ubicación (5 a 160 caracteres)';
  END IF;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS validate_new_incident_trigger ON public.incidents;
CREATE TRIGGER validate_new_incident_trigger
BEFORE INSERT ON public.incidents FOR EACH ROW
EXECUTE FUNCTION public.validate_new_incident();

-- Como defensa adicional a RLS, restringir a la policía a cambiar solamente
-- el estado. Un administrador puede corregir coordenadas de incidentes antiguos.
CREATE OR REPLACE FUNCTION public.protect_incident_updates()
RETURNS trigger LANGUAGE plpgsql SET search_path=public AS $$
DECLARE requester_role text;
BEGIN
  -- Mantenimiento desde SQL Editor / service_role.
  IF current_user IN ('postgres','service_role') THEN RETURN NEW; END IF;
  requester_role := public.current_app_role();
  IF requester_role='admin' THEN RETURN NEW; END IF;
  IF requester_role <> 'policia' OR requester_role IS NULL THEN
    RAISE EXCEPTION 'No tienes permiso para modificar reportes';
  END IF;
  IF NEW.reporter_id IS DISTINCT FROM OLD.reporter_id OR
     NEW.station_id IS DISTINCT FROM OLD.station_id OR
     NEW.category IS DISTINCT FROM OLD.category OR
     NEW.description IS DISTINCT FROM OLD.description OR
     NEW.address IS DISTINCT FROM OLD.address OR
     NEW.latitude IS DISTINCT FROM OLD.latitude OR
     NEW.longitude IS DISTINCT FROM OLD.longitude OR
     NEW.photo_url IS DISTINCT FROM OLD.photo_url OR
     NEW.created_at IS DISTINCT FROM OLD.created_at OR
     NEW.report_code IS DISTINCT FROM OLD.report_code THEN
    RAISE EXCEPTION 'El personal policial solo puede modificar el estado';
  END IF;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS protect_incident_updates_trigger ON public.incidents;
CREATE TRIGGER protect_incident_updates_trigger
BEFORE UPDATE ON public.incidents FOR EACH ROW
EXECUTE FUNCTION public.protect_incident_updates();

-- Evitar que el usuario modifique su retén o correo desde la consola del
-- navegador (además de los controles previos para rol y activación).
CREATE OR REPLACE FUNCTION public.protect_profile_role()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    IF NEW.role IS DISTINCT FROM OLD.role OR NEW.active IS DISTINCT FROM OLD.active OR
       NEW.station_id IS DISTINCT FROM OLD.station_id OR NEW.email IS DISTINCT FROM OLD.email THEN
      RAISE EXCEPTION 'Solo el administrador puede modificar rol, retén, correo o activación';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

-- El administrador también puede registrar observaciones; siempre se audita
-- el usuario actual, sin poder atribuir notas a otra persona.
DROP POLICY IF EXISTS "observations_police_insert" ON public.incident_observations;
DROP POLICY IF EXISTS "observations_staff_insert" ON public.incident_observations;
CREATE POLICY "observations_staff_insert" ON public.incident_observations
FOR INSERT TO authenticated WITH CHECK (
  police_id=auth.uid() AND public.is_staff()
  AND EXISTS (SELECT 1 FROM public.incidents i WHERE i.id=incident_id)
);

-- Estadísticas de toda la comunidad sin información personal, coordenadas,
-- teléfonos, textos de reportes ni identificadores.
-- SECURITY DEFINER lee agregados pese a RLS sin hacer visibles registros
-- cerrados o ajenos que el vecino no debería poder consultar individualmente.
CREATE OR REPLACE FUNCTION public.community_statistics()
RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = '' AS $$
DECLARE result jsonb;
BEGIN
  IF auth.uid() IS NULL OR public.current_app_role() NOT IN ('vecino','policia','admin') THEN
    RAISE EXCEPTION 'No autorizado para consultar estadísticas' USING ERRCODE = '42501';
  END IF;

  SELECT jsonb_build_object(
    'total',(SELECT count(*) FROM public.incidents),
    'active',(SELECT count(*) FROM public.incidents WHERE status IN ('Activa','Recibida','En camino')),
    'closed',(SELECT count(*) FROM public.incidents WHERE status IN ('Atendida','Resuelta')),
    'false_alarms',(SELECT count(*) FROM public.incidents WHERE status='Falsa alarma'),
    'categories',(
      SELECT coalesce(jsonb_object_agg(category,n),'{}'::jsonb)
      FROM (SELECT category,count(*) AS n FROM public.incidents GROUP BY category) x
    ),
    'days',(
      SELECT coalesce(jsonb_agg(jsonb_build_object(
        'date',d.day::date::text,
        'count',(
          SELECT count(*) FROM public.incidents i
          WHERE i.created_at >= (d.day::date::timestamp AT TIME ZONE 'America/La_Paz')
            AND i.created_at < ((d.day::date + 1)::timestamp AT TIME ZONE 'America/La_Paz')
        ),
        'categories',(
          SELECT coalesce(jsonb_object_agg(cat,n),'{}'::jsonb)
          FROM (
            SELECT i.category AS cat,count(*) AS n FROM public.incidents i
            WHERE i.created_at >= (d.day::date::timestamp AT TIME ZONE 'America/La_Paz')
              AND i.created_at < ((d.day::date + 1)::timestamp AT TIME ZONE 'America/La_Paz')
            GROUP BY i.category
          ) cats
        ),
        'statuses',(
          SELECT coalesce(jsonb_object_agg(status,n),'{}'::jsonb)
          FROM (
            SELECT i.status,count(*) AS n FROM public.incidents i
            WHERE i.created_at >= (d.day::date::timestamp AT TIME ZONE 'America/La_Paz')
              AND i.created_at < ((d.day::date + 1)::timestamp AT TIME ZONE 'America/La_Paz')
            GROUP BY i.status
          ) statuses
        )
      ) ORDER BY d.day),'[]'::jsonb)
      FROM generate_series(
        ((now() AT TIME ZONE 'America/La_Paz')::date - 6)::timestamp,
        (now() AT TIME ZONE 'America/La_Paz')::date::timestamp,
        interval '1 day'
      ) AS d(day)
    )
  ) INTO result;

  RETURN result;
END;
$$;
-- PostgreSQL asigna EXECUTE a PUBLIC por defecto al crear una función.
REVOKE ALL ON FUNCTION public.community_statistics() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.community_statistics() FROM anon;
GRANT EXECUTE ON FUNCTION public.community_statistics() TO authenticated;

-- Ejemplo de comprobación (desde la sesión de un vecino autenticado):
-- SELECT public.community_statistics();
-- En la respuesta solo deben existir cantidades por fecha, categoría y estado.
