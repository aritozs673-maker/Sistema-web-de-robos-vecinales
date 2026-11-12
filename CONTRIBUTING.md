# Guía de contribución — Equipo DHAAP

## Ramas
| Rama | Uso | Reglas |
|---|---|---|
| `main` | Versión estable y entregable. Cada release sale de aquí. | Nadie hace push directo. Solo recibe PR desde `develop`. |
| `develop` | Integración de lo que ya fue revisado. | Solo recibe PR desde ramas `feature/*`, `fix/*` y `docs/*`. |
| `feature/HU-XX-nombre-corto` | Una historia de usuario. Ej.: `feature/HU-01-registrar-usuario` | Se crea desde `develop` y se borra tras el merge. |
| `fix/descripcion` | Corrección de errores. | Igual que feature. |
| `docs/descripcion` | Cambios de documentación. | Igual que feature. |

## Commits (convención)
Formato: `tipo(HU-XX): descripción corta en presente`

Tipos: `feat` (funcionalidad), `fix` (error), `docs`, `style` (CSS/formato), `refactor`, `chore` (config/tareas).

Ejemplos:
```
feat(HU-01): agrega formulario de registro con validación de correo
fix(HU-03): corrige permiso de geolocalización denegado
docs: agrega manual de usuario del vecino
style(HU-04): ajusta colores de marcadores por categoría
```
Prohibido: mensajes como "cambios", "subo archivos", "Add files via upload".

## Pull Requests
1. Subir la rama: `git push -u origin feature/HU-XX-nombre`.
2. Abrir PR hacia `develop` con la plantilla (se carga sola). Incluir `Closes #N` para cerrar el issue.
3. Asignar como revisor a **otro integrante** (criterio de cumplimiento del contrato de equipo).
4. El revisor comenta, pide cambios o aprueba. Solo después se hace **Merge**.
5. Se elimina la rama.

## Issues
Un issue por historia de usuario (plantilla *Historia de usuario*) y uno por cada error (plantilla *Reporte de error*). Etiquetas: `historia`, `bug`, `docs`, `iteración-1…4`, `prioridad-alta/media/baja`.

## Tablero
GitHub Projects con columnas: **Backlog → Por hacer → En progreso → En revisión → Hecho**.

## Versionado (SemVer)
`MAJOR.MINOR.PATCH`. Cada iteración cerrada genera un tag y un Release: `v0.1.0` (Iter. 1) … `v0.4.0` (Iter. 4) … `v1.0.0` (entrega final).

## Seguridad
- Solo claves **públicas** en `js/config.js` (Supabase publishable/anon y Mapbox `pk.`).
- Nunca subir `service_role`, `sb_secret_` ni tokens `sk.`.
- Restringir el token de Mapbox a la URL del sitio.
