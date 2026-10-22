# ITERACIÓN 6: PANEL POLICIAL DE ATENCIÓN

**Proyecto:** Sistema de Alerta Comunitaria para la Prevención de Robos  
**Objetivo:** Permitir que el personal policial reciba alertas, consulte los reportes, visualice las rutas y actualice el estado de atención.  
**Duración estimada:** 1 semana  
**Total:** 18 puntos de historia

---

## HU-28 — Recibir alertas en el panel policial en tiempo real

**Como:** Policía.  
**Quiero:** Ver en mi panel las alertas nuevas apenas sean enviadas por los vecinos.  
**Para:** Responder rápidamente a los incidentes.

**Prioridad:** Muy alta  
**Puntos de historia:** 5

### Criterios de aceptación

1. El panel debe mostrar la lista de alertas activas ordenadas de la más reciente a la más antigua.
2. Cuando llegue una nueva alerta, el panel debe actualizarse automáticamente y mostrar una notificación visual y sonora.
3. El panel debe mostrar el número de alertas pendientes de atención.
4. El policía debe ver las alertas ubicadas en la zona de su retén asignado.

### Tareas

- Diseñar el panel de alertas policiales.
- Mostrar las alertas activas ordenadas por fecha y hora.
- Implementar la actualización automática de nuevas alertas.
- Agregar notificaciones visuales y sonoras.
- Mostrar el número de alertas pendientes.
- Filtrar las alertas según la zona del retén asignado.

---

## HU-29 — Consultar el reporte completo de la alerta

**Como:** Policía.  
**Quiero:** Ver toda la información del reporte de una alerta.  
**Para:** Evaluar la situación antes de intervenir.

**Prioridad:** Muy alta  
**Puntos de historia:** 5

### Criterios de aceptación

1. El sistema debe mostrar el código del reporte, la categoría, el estado, la fecha y la hora.
2. El sistema debe mostrar los datos del vecino que reportó: nombre, celular y correo electrónico.
3. El sistema debe mostrar la latitud, longitud y dirección aproximada del incidente.
4. El sistema debe mostrar la fotografía adjunta, el número de confirmaciones y los comentarios de los vecinos.
5. Los datos del vecino solo deben ser visibles para usuarios con rol Policía o Administrador.

### Tareas

- Diseñar la vista de detalle del reporte policial.
- Consultar los datos completos de la alerta desde el servidor.
- Mostrar la información del incidente y del vecino que lo reportó.
- Mostrar la fotografía, las confirmaciones y los comentarios disponibles.
- Restringir el acceso a los datos personales según el rol.
- Probar la consulta de reportes con y sin fotografía adjunta.

---

## HU-30 — Visualizar ubicación y ruta hacia el incidente

**Como:** Policía.  
**Quiero:** Ver el incidente en el mapa y la ruta desde mi retén.  
**Para:** Llegar al lugar en el menor tiempo posible.

**Prioridad:** Alta  
**Puntos de historia:** 5

### Criterios de aceptación

1. El mapa debe mostrar el marcador del incidente con el icono de su categoría y la ubicación del retén.
2. El sistema debe trazar la ruta entre el retén y el incidente, mostrando distancia y tiempo estimado.
3. El policía debe poder abrir la ruta en una aplicación de navegación.

### Tareas

- Integrar el mapa de Mapbox en el panel policial.
- Mostrar la ubicación del retén y del incidente.
- Implementar el trazado de la ruta.
- Mostrar la distancia y el tiempo estimado del recorrido.
- Agregar una opción para abrir la ruta en una aplicación de navegación.
- Verificar la visualización de ubicaciones y rutas.

---

## HU-31 — Actualizar el estado de atención de la alerta

**Como:** Policía.  
**Quiero:** Cambiar el estado de una alerta (Recibida, En camino, Atendida o Falsa alarma).  
**Para:** Informar el avance de la atención a la comunidad y al sistema.

**Prioridad:** Alta  
**Puntos de historia:** 3

### Criterios de aceptación

1. El policía debe poder seleccionar uno de los estados disponibles para la alerta.
2. El sistema debe registrar el policía, la fecha y la hora de cada cambio de estado.
3. El vecino que reportó debe ver el estado actualizado de su reporte.
4. Una alerta en estado "Atendida" o "Falsa alarma" debe salir del mapa de alertas activas y conservarse en el historial.

### Tareas

- Agregar un selector de estados al reporte policial.
- Implementar la actualización del estado de la alerta.
- Registrar el policía responsable, la fecha y la hora del cambio.
- Actualizar el estado visible para el vecino que reportó.
- Retirar del mapa activo las alertas atendidas o marcadas como falsas alarmas.
- Verificar que las alertas finalizadas permanezcan en el historial.

---

## Entregable de la iteración

Panel policial funcional con alertas en tiempo real, consulta completa de reportes, visualización de rutas y actualización del estado de atención.
