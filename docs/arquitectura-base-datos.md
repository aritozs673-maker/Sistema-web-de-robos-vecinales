# Arquitectura de la Base de Datos — AlertaVecinal

## 1. Descripción general

AlertaVecinal utiliza Supabase como servicio de base de datos, basado en PostgreSQL. La estructura debe permitir almacenar y consultar la información necesaria para el funcionamiento del sistema de alertas vecinales.

## 2. Componentes

- PostgreSQL: motor de base de datos.
- Supabase: plataforma de acceso y administración de datos.
- Supabase Auth: gestión de identidades, si está configurada.
- Políticas RLS: control de acceso a los registros.
- Scripts SQL y migraciones: definición y evolución del esquema, cuando existan.

## 3. Información que gestiona el sistema

Según las funcionalidades implementadas, la base de datos puede contemplar:

- Perfiles y roles de usuarios.
- Alertas e incidentes reportados.
- Ubicaciones asociadas a incidentes.
- Estados y fechas de seguimiento.
- Información necesaria para las operaciones autorizadas.

## 4. Seguridad

Las tablas que contienen información privada deben contar con permisos adecuados. Las políticas RLS deben limitar las consultas y modificaciones según la identidad y los permisos del usuario.

No se deben guardar contraseñas en texto plano ni publicar claves privadas o credenciales.

## 5. Pruebas recomendadas

- Verificar las tablas y sus relaciones.
- Comprobar las restricciones y los tipos de datos.
- Probar las políticas de acceso.
- Validar las operaciones de lectura y escritura.
- Comprobar el tratamiento de errores.

## 6. Mantenimiento

Los cambios del esquema deben documentarse y revisarse antes de aplicarse a la base de datos utilizada por el sistema.

## 7. Observación

La estructura definitiva debe coincidir con las tablas, columnas, relaciones y políticas realmente configuradas en Supabase.
