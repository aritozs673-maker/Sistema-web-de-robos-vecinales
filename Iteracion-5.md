# ITERACIÓN 5: CONTROL DE ACCESO Y ROLES

**Proyecto:** Sistema de Alerta Comunitaria para la Prevención de Robos  
**Objetivo:** Implementar el acceso policial, controlar los permisos según el rol del usuario y administrar las cuentas del personal policial.  
**Duración estimada:** 1 semana  
**Total:** 11 puntos de historia

---

## HU-26 — Iniciar sesión como policía

**Como:** Policía.  
**Quiero:** Iniciar sesión con mi cuenta institucional.  
**Para:** Acceder al panel policial de alertas.

**Prioridad:** Alta  
**Puntos de historia:** 3

### Criterios de aceptación

1. El sistema debe validar el correo y la contraseña, y comprobar que la cuenta tenga el rol Policía.
2. Si los datos son incorrectos, debe mostrar el mensaje "Correo o contraseña inválidos".
3. Si los datos son correctos, el sistema debe generar un token de sesión que incluya el rol y redirigir al panel policial.
4. Una cuenta con rol Vecino no debe poder ingresar al panel policial.

### Tareas

- Diseñar la pantalla de inicio de sesión policial.
- Validar las credenciales con la base de datos.
- Comprobar que el usuario tenga el rol Policía.
- Generar el token de sesión y redirigir al panel policial.
- Realizar pruebas de acceso con credenciales válidas e inválidas.

---

## HU-27 — Control de acceso por roles

**Como:** Administrador del sistema.  
**Quiero:** Que cada cuenta tenga un rol (Vecino, Policía o Administrador).  
**Para:** Que cada usuario acceda únicamente a las funciones que le corresponden.

**Prioridad:** Alta  
**Puntos de historia:** 5

### Criterios de aceptación

1. El modelo de usuario debe almacenar un rol; las cuentas registradas desde la web deben tener el rol Vecino por defecto.
2. El sistema debe validar el rol del token en cada solicitud al servidor.
3. Si un usuario intenta acceder a una pantalla o servicio de otro rol, el sistema debe mostrar "Acceso denegado".

### Tareas

- Agregar el campo de rol al modelo de usuario.
- Definir los roles Vecino, Policía y Administrador.
- Asignar el rol Vecino por defecto a los usuarios registrados desde la web.
- Validar los permisos en las solicitudes al servidor.
- Probar que cada rol pueda acceder únicamente a sus funciones autorizadas.

---

## HU-35 — Gestionar cuentas de policía

**Como:** Administrador del sistema.  
**Quiero:** Registrar, activar y desactivar cuentas de policía.  
**Para:** Controlar quién accede a la información de los reportes.

**Prioridad:** Media  
**Puntos de historia:** 3

### Criterios de aceptación

1. El administrador debe poder registrar un policía con nombre, correo, celular, retén asignado y contraseña temporal.
2. El administrador debe poder desactivar una cuenta; una cuenta desactivada no debe poder iniciar sesión.
3. El sistema debe mostrar la lista de policías registrados con su estado y retén.

### Tareas

- Diseñar el formulario de registro de policías.
- Registrar los datos personales y el retén asignado.
- Implementar la activación y desactivación de cuentas.
- Mostrar la lista de policías y su estado.
- Verificar que las cuentas desactivadas no puedan iniciar sesión.

---

## Entregable de la iteración

Módulo de acceso policial y administración de cuentas, con permisos diferenciados para Vecino, Policía y Administrador.
