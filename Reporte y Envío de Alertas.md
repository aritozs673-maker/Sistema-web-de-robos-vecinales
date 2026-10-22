## HU-03 — Obtener ubicación del incidente

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Muy alta |
| **Story Points** | 8 |

> **Como** usuario que reporta,  
> **quiero** que el sistema obtenga automáticamente mi ubicación mediante geolocalización del navegador,  
> **para** indicar con precisión el evento.  

### Criterios de Aceptación
- El sistema debe solicitar permiso para utilizar la geolocalización del navegador.
- El sistema debe capturar la latitud y longitud del usuario.
- Las coordenadas deben incluirse automáticamente en el reporte de la alerta.

### Tareas
- [ ] Configurar permisos de geolocalización mediante la API del navegador.
- [ ] Integrar servicios de geolocalización.
- [ ] Capturar latitud y longitud en tiempo real.
- [ ] Adjuntar coordenadas al `payload` del reporte.

---

## HU-15 — Categorizar tipo de alerta

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 3 |

> **Como** usuario que reporta,  
> **quiero** seleccionar el tipo de incidente,  
> **para** que los vecinos sepan exactamente qué ocurre.  

### Criterios de Aceptación
- El usuario debe poder seleccionar una categoría antes de confirmar la alerta.
- El sistema debe mostrar una lista de categorías disponibles.
- El icono del incidente en el mapa debe cambiar según la categoría seleccionada.

### Tareas
- [ ] Diseñar selector de categorías en la interfaz.
- [ ] Crear catálogo de tipos de incidentes en base de datos.
- [ ] Asignar iconos dinámicos según la categoría.
- [ ] Validar selección obligatoria antes del envío.

---

## HU-16 — Adjuntar evidencia multimedia

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 5 |

> **Como** usuario,  
> **quiero** poder tomar una foto y adjuntarla a mi reporte,  
> **para** proporcionar mayor evidencia de la situación.  

### Criterios de Aceptación
- El sistema debe permitir capturar una foto mediante la cámara web o cargar un archivo desde el equipo.
- La imagen debe comprimirse antes de enviarse.
- La imagen debe guardarse en el servidor y asociarse al reporte.

### Tareas
- [ ] Solicitar permisos de cámara web y almacenamiento de archivos.
- [ ] Implementar módulo de compresión de imágenes.
- [ ] Configurar almacenamiento de archivos en el servidor.
- [ ] Vincular la ruta de la imagen con el registro del incidente.

---

## HU-02 — Enviar una alerta de inseguridad

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Muy alta |
| **Story Points** | 8 |

> **Como** vecino,  
> **quiero** enviar una alerta rápida cuando observe una situación de inseguridad,  
> **para** informar a la comunidad.  

### Criterios de Aceptación
- La interfaz debe mostrar un botón principal para enviar una alerta y solicitar una confirmación.
- El sistema debe registrar la alerta en el servidor en menos de 5 segundos.
- El sistema debe mostrar un mensaje confirmando que la alerta fue enviada correctamente.

### Tareas
- [ ] Diseñar botón de alerta: Crear un botón principal, visible y de fácil acceso.
- [ ] Crear confirmación: Mostrar una ventana para confirmar o cancelar el envío.
- [ ] Preparar datos: Definir y preparar la información que tendrá la alerta.
- [ ] Conectar con servidor: Implementar el envío de la alerta mediante la API.
- [ ] Registrar alerta: Guardar la alerta correctamente en el servidor/base de datos.
- [ ] Optimizar respuesta: Garantizar que el registro se realice en menos de 5 segundos.
- [ ] Mostrar notificación: Informar al usuario si la alerta fue enviada correctamente o si ocurrió un error.
- [ ] Realizar pruebas: Comprobar envío, cancelación, errores de conexión y tiempo de respuesta.

---

## HU-07 — Registrar incidentes en la base de datos

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 4 |

> **Como** personal de registro de datos,  
> **quiero** que el sistema almacene cada reporte de forma permanente,  
> **para** mantener un registro de los incidentes.  

### Criterios de Aceptación
- El sistema debe almacenar el ID del usuario, coordenadas, fecha, categoría y estado.
- El sistema debe conservar los reportes, aunque el servidor tenga una interrupción.
- Los incidentes almacenados deben poder consultarse posteriormente.

### Tareas
- [ ] Diseñar la estructura de almacenamiento permanente para los reportes.
- [ ] Configurar la persistencia de datos ante interrupciones del servidor.
- [ ] Crear consultas o servicios para recuperar el historial de incidentes.
- [ ] Realizar pruebas de integridad y recuperación de datos.
