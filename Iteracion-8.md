# ITERACIÓN 8: PERSONALIZACIÓN, ESTADÍSTICAS Y ANÁLISIS

**Proyecto:** Sistema de Alerta Comunitaria para la Prevención de Robos  
**Objetivo:** Permitir que los usuarios personalicen sus notificaciones e incorporar herramientas para analizar los incidentes registrados.  
**Duración estimada:** 1 semana  
**Total:** 13 puntos de historia

---

## HU-21 — Configurar radio de notificaciones

**Como:** Usuario.  
**Quiero:** Poder configurar a cuántos kilómetros a la redonda deseo recibir alertas.  
**Para:** Personalizar mi experiencia.

**Prioridad:** Baja  
**Puntos de historia:** 3

### Criterios de aceptación

1. El sistema debe incluir un control para seleccionar la distancia.
2. La distancia debe poder configurarse, por ejemplo, entre 500 m y 3 km.
3. El sistema debe utilizar la distancia seleccionada para enviar las notificaciones.

### Tareas

- Diseñar un control para seleccionar el radio de notificaciones.
- Permitir elegir una distancia entre 500 metros y 3 kilómetros.
- Guardar la preferencia seleccionada por el usuario.
- Aplicar el radio configurado al cálculo de proximidad de los incidentes.
- Probar que las notificaciones respeten la distancia elegida.

---

## HU-25 — Silenciar notificaciones temporalmente

**Como:** Usuario.  
**Quiero:** Poder silenciar las notificaciones por un tiempo.  
**Para:** No ser interrumpido cuando lo necesite.

**Prioridad:** Baja  
**Puntos de historia:** 2

### Criterios de aceptación

1. El sistema debe tener una opción para activar o desactivar el modo no molestar.
2. El usuario debe poder definir cuándo desea silenciar las notificaciones.
3. Mientras esté activo el modo no molestar, el sistema no debe mostrar las notificaciones push de las geocercas.

### Tareas

- Agregar una opción para activar y desactivar el modo no molestar.
- Permitir configurar el periodo durante el cual se silenciarán las notificaciones.
- Guardar las preferencias del usuario.
- Evitar la presentación de notificaciones push de geocercas durante el periodo configurado.
- Verificar que las notificaciones vuelvan a mostrarse al finalizar el periodo.

---

## HU-23 — Panel de estadísticas web

**Como:** Personal de monitoreo.  
**Quiero:** Visualizar estadísticas básicas de las alertas.  
**Para:** Identificar patrones de inseguridad.

**Prioridad:** Media  
**Puntos de historia:** 3

### Criterios de aceptación

1. El panel debe mostrar un gráfico con la cantidad de incidentes.
2. El gráfico debe mostrar los incidentes de los últimos 7 días.
3. Los datos deben obtenerse del historial almacenado en el backend.

### Tareas

- Diseñar el panel de estadísticas.
- Consultar los incidentes almacenados en el backend.
- Obtener la cantidad de incidentes de los últimos siete días.
- Mostrar los resultados mediante un gráfico.
- Verificar que las estadísticas coincidan con los registros almacenados.

---

## HU-24 — Mapa de calor de delincuencia

**Como:** Administrador del sistema.  
**Quiero:** Ver un mapa de calor basado en el historial.  
**Para:** Identificar las zonas con mayor cantidad de incidentes.

**Prioridad:** Media  
**Puntos de historia:** 5

### Criterios de aceptación

1. El sistema debe utilizar una capa de mapa de calor.
2. Las zonas con mayor concentración de incidentes deben destacarse visualmente.
3. El mapa debe utilizar los datos históricos de los incidentes registrados.

### Tareas

- Integrar una capa de mapa de calor en Mapbox.
- Consultar las coordenadas de los incidentes históricos.
- Representar la concentración geográfica de los incidentes.
- Diferenciar visualmente las zonas con mayor cantidad de reportes.
- Verificar que el mapa utilice los datos almacenados en el sistema.


---

## Entregable de la iteración

Sistema con preferencias personalizadas de notificación, modo no molestar, estadísticas de incidentes de los últimos siete días y mapa de calor para identificar zonas con mayor concentración de reportes.
