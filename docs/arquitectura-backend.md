# Arquitectura del Backend — AlertaVecinal

## 1. Descripción general

AlertaVecinal utiliza JavaScript en el cliente y servicios de Supabase para las funcionalidades de autenticación y acceso a datos. Las operaciones deben respetar los permisos configurados para cada usuario.

## 2. Componentes principales

- `js/app.js`: lógica e interacciones de la aplicación.
- `js/config.js`: configuración de los servicios externos.
- Supabase Auth: autenticación de usuarios, cuando está configurada.
- Supabase Database: almacenamiento y consulta de información.
- Supabase Edge Functions: funciones del servidor, si están implementadas.

## 3. Responsabilidades

- Gestionar los formularios de acceso y registro.
- Validar los datos recibidos.
- Consultar y registrar alertas según los permisos autorizados.
- Gestionar los errores de comunicación.
- Respetar los roles de los usuarios.
- Evitar que usuarios sin autorización accedan a información restringida.

## 4. Seguridad

Las operaciones deben estar protegidas mediante autenticación, políticas RLS de PostgreSQL y validaciones en el servidor cuando correspondan.

Nunca deben incluirse contraseñas, claves privadas ni secretos en el repositorio.

## 5. Pruebas recomendadas

- Probar el inicio de sesión y el registro.
- Verificar los permisos de cada rol.
- Comprobar la creación y consulta de alertas.
- Verificar el manejo de errores.
- Probar las políticas de seguridad de la base de datos.

## 6. Mantenimiento

Los cambios de lógica y servicios deben registrarse mediante commits descriptivos y revisarse antes de integrarse en la rama principal.
