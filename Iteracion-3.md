# Iteración 3: Visualización Geográfica y Monitoreo

> **Entregable:** Integración de Mapbox para la visualización de marcadores de incidentes y retenes policiales, consulta de detalles, cálculo de proximidad y monitoreo de incidentes en tiempo real.

## HU-04 — Visualizar el incidente en el mapa

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 5 |

> **Como** vecino,  
> **quiero** visualizar en un mapa la ubicación de los incidentes,  
> **para** tomar precauciones.  

#### Criterios de Aceptación
- El sistema debe mostrar un mapa con los incidentes activos.
- Cada incidente debe aparecer mediante un marcador.
- Al seleccionar un marcador, se debe mostrar información básica de la alerta.

#### Tareas
- [ ] Integrar la librería Mapbox en la interfaz.
- [ ] Cargar marcadores dinámicos según las coordenadas de los incidentes.
- [ ] Programar eventos de clic en los marcadores para mostrar detalles.
- [ ] Realizar pruebas de rendimiento del mapa.

---

## HU-06 — Consultar información detallada del incidente

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 5 |

> **Como** usuario,  
> **quiero** ver la información de un incidente reportado,  
> **para** conocer la calle y la hora.  

#### Criterios de Aceptación
- El sistema debe mostrar la fecha y hora del incidente.
- Debe mostrar la ubicación aproximada y categoría del evento.
- Debe mostrar la fotografía adjunta cuando el reporte tenga una.

#### Tareas
- [ ] Diseñar la vista de detalle del incidente.
- [ ] Consultar datos específicos desde el backend por ID de incidente.
- [ ] Programar la visualización de la imagen adjunta si existe.
- [ ] Probar la interfaz con diferentes tipos de reportes.

---

## HU-05 — Recibir alertas por cercanía

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 5 |

> **Como** vecino,  
> **quiero** recibir una notificación cuando se produzca una alerta en mi zona,  
> **para** estar prevenido.  

#### Criterios de Aceptación
- El sistema debe establecer una zona de cobertura alrededor del incidente.
- Los usuarios que estén dentro de esa zona deben recibir una notificación.
- La notificación debe indicar que existe un incidente cercano.

#### Tareas
- [ ] Configurar el sistema de geocercas en el servidor.
- [ ] Calcular la distancia entre los usuarios activos y el incidente.
- [ ] Integrar el servicio de notificaciones push web.
- [ ] Probar la entrega de avisos por proximidad.

---

## HU-09 — Identificar retenes policiales

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 2 |

> **Como** usuario,  
> **quiero** ver los retenes policiales cercanos en el mapa,  
> **para** facilitar la búsqueda de ayuda.  

#### Criterios de Aceptación
- El mapa debe mostrar marcadores de estaciones o retenes policiales.
- Los marcadores policiales deben diferenciarse de los incidentes.
- Al seleccionar un retén, se debe mostrar su información básica.

#### Tareas
- [ ] Crear la capa de datos para los retenes policiales en la base de datos.
- [ ] Añadir marcadores distintivos en el mapa de Mapbox.
- [ ] Programar la ventana emergente con la información de contacto del retén.
- [ ] Validar la visualización correcta frente a los reportes comunes.

---

## HU-08 — Monitorear incidentes en tiempo real

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 5 |

> **Como** personal de monitoreo,  
> **quiero** ver los incidentes en un panel web,  
> **para** gestionar la seguridad de la zona.  

#### Criterios de Aceptación
- El mapa debe actualizarse automáticamente cuando llegue un nuevo reporte.
- Los incidentes cercanos deben agruparse cuando existan muchos marcadores.
- El personal de monitoreo debe poder visualizar los incidentes activos.

#### Tareas
- [ ] Diseñar el panel de monitoreo con el mapa de incidentes activos.
- [ ] Implementar la actualización en tiempo real (WebSocket / SignalR).
- [ ] Configurar la agrupación (clustering) de marcadores cercanos en Mapbox.
- [ ] Realizar pruebas de carga con muchos marcadores.
