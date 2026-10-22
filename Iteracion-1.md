# Iteración 1: Autenticación y Gestión de Usuarios

> **Sistema base con cuentas de usuario, autenticación segura , recuperación de contraseña por correo, gestión de perfiles y control de sesiones.

## HU-01 — Registrar usuario

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 3 |

> **Como** vecino de la comunidad,  
> **quiero** registrarme en el sistema,  
> **para** poder utilizar las funciones de alerta.  

#### Criterios de Aceptación
- El sistema debe solicitar nombre, celular, correo electrónico y contraseña.
- El sistema debe validar que el correo tenga un formato correcto y evitar usuarios duplicados.
- El sistema debe almacenar la contraseña de forma segura mediante un algoritmo de encriptación como `bcrypt`.

#### Tareas
- [ ] Diseñar interfaz de registro.
- [ ] Crear modelo de usuario en base de datos.
- [ ] Implementar lógica de validación de correo.
- [ ] Programar encriptación con `bcrypt`.
- [ ] Crear pruebas y revisión de código.

---

## HU-11 — Iniciar sesión

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 3 |

> **Como** usuario registrado (vecino o policía),  
> **quiero** iniciar sesión en mi cuenta,  
> **para** acceder al panel y funciones que corresponden a mi rol.  

#### Criterios de Aceptación
- El sistema debe validar el correo y contraseña contra la base de datos.
- Si los datos son incorrectos, debe mostrar `"Correo o contraseña inválidos"`.
- Si los datos son correctos, el sistema debe generar un token de sesión.
- Según el rol de la cuenta (Vecino o Policía), el sistema debe redirigir a la pantalla principal o al panel policial.

#### Tareas
- [ ] Diseñar pantalla de login.
- [ ] Conectar credenciales con la base de datos.
- [ ] Configurar la generación de tokens de sesión.
- [ ] Programar manejo de errores de autenticación.
- [ ] Implementar la redirección según el rol del usuario.
- [ ] Realizar pruebas unitarias.

---

## HU-12 — Recuperar contraseña

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 3 |

> **Como** usuario que olvidó su contraseña,  
> **quiero** poder recuperarla mediante mi correo,  
> **para** volver a acceder a mi cuenta.  

#### Criterios de Aceptación
- El sistema debe enviar un enlace o código de recuperación al correo registrado.
- El enlace o código debe tener un tiempo limitado de uso.
- El usuario debe poder establecer una nueva contraseña.

#### Tareas
- [ ] Diseñar la pantalla «Olvidé mi contraseña».
- [ ] Generar el enlace o código de recuperación con tiempo de vida limitado.
- [ ] Enviar el correo de recuperación al correo registrado.
- [ ] Crear el formulario para establecer la nueva contraseña (encriptada con `bcrypt`).
- [ ] Realizar pruebas (enlace vencido, correo no registrado).

---

## HU-13 — Editar perfil de usuario

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 2 |

> **Como** usuario,  
> **quiero** poder editar mi información personal,  
> **para** mantener mis datos de contacto actualizados.  

#### Criterios de Aceptación
- El usuario debe poder modificar su nombre.
- El usuario debe poder modificar su número de celular.
- Los cambios realizados deben actualizarse en la base de datos.

#### Tareas
- [ ] Diseñar vista de edición de perfil.
- [ ] Crear `endpoint` de actualización de datos.
- [ ] Sincronizar cambios con la base de datos.
- [ ] Realizar pruebas de integración.

---

## HU-14 — Cerrar sesión

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Baja |
| **Story Points** | 1 |

> **Como** usuario (vecino o policía),  
> **quiero** poder cerrar mi sesión,  
> **para** proteger mi cuenta si comparto el equipo con alguien más.  

#### Criterios de Aceptación
- El sistema debe permitir cerrar la sesión.
- El sistema debe invalidar el token de sesión activo.
- El usuario debe ser enviado a la pantalla de inicio de sesión.

#### Tareas
- [ ] Agregar botón de cierre de sesión en la interfaz.
- [ ] Programar la invalidación del token.
- [ ] Redirigir a la vista de login.
- [ ] Validar seguridad del cierre de sesión.
