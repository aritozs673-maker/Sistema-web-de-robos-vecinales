# Iteración 4: Gestión Comunitaria y Seguimiento de Alertas

> **Entregable:** Herramientas de participación vecinal: confirmación y comentarios en reportes de terceros, cancelación de falsas alarmas, cambio de estado a resuelto e historial de reportes personales.

## HU-18 — Confirmar alerta de otro vecino

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 3 |

> **Como** vecino que observa el mismo incidente,  
> **quiero** poder confirmar la alerta de otro usuario,  
> **para** aumentar la veracidad del reporte.  

#### Criterios de Aceptación
- El reporte debe tener un botón "Yo también lo veo" o "Confirmar".
- El sistema debe aumentar el número de confirmaciones.
- El contador de confirmaciones debe ser visible para los usuarios.

#### Tareas
- [ ] Añadir el botón de confirmación en la vista de detalles.
- [ ] Programar la actualización del contador en la base de datos.
- [ ] Reflejar el incremento de veracidad en tiempo real.
- [ ] Probar restricciones para evitar auto-confirmaciones múltiples.

---

## HU-19 — Comentar en un incidente activo

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 3 |

> **Como** vecino cercano,  
> **quiero** agregar comentarios a un reporte existente,  
> **para** proporcionar más detalles sobre el incidente.  

#### Criterios de Aceptación
- Cada incidente debe tener una sección de comentarios.
- Los comentarios deben mostrarse en orden cronológico.
- Debe mostrarse el nombre o alias del usuario que realizó cada comentario.

#### Tareas
- [ ] Crear la tabla de comentarios en la base de datos.
- [ ] Diseñar la sección de comentarios en la vista de detalle.
- [ ] Crear endpoints para guardar y consultar comentarios en orden cronológico.
- [ ] Mostrar el nombre o alias de quien comenta.
- [ ] Realizar pruebas de integración.

---

## HU-17 — Cancelar una falsa alarma

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Alta |
| **Story Points** | 2 |

> **Como** usuario que envió una alerta por error,  
> **quiero** poder cancelarla,  
> **para** evitar movilizaciones innecesarias y así no alertar a la comunidad.  

#### Criterios de Aceptación
- El creador del reporte debe tener una opción para «Marcar como falsa alarma».
- El estado del incidente debe cambiar a falsa alarma.
- El incidente debe desaparecer del mapa de alertas activas.

#### Tareas
- [ ] Agregar la opción «Marcar como falsa alarma» visible solo para el creador.
- [ ] Crear el endpoint de cambio de estado a falsa alarma.
- [ ] Retirar el incidente del mapa de alertas activas.
- [ ] Probar que otro usuario no pueda cancelar el reporte.

---

## HU-20 — Marcar incidente como resuelto

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 5 |

> **Como** creador del reporte o administrador,  
> **quiero** marcar el incidente como resuelto cuando pase el peligro,  
> **para** limpiar el mapa.  

#### Criterios de Aceptación
- El creador o administrador debe poder cambiar el estado a "Resuelto".
- El marcador debe desaparecer del mapa en vivo.
- El incidente debe conservarse en el historial.

#### Tareas
- [ ] Agregar opción de cambio de estado en la interfaz de gestión.
- [ ] Modificar el filtro del mapa para ocultar incidentes resueltos.
- [ ] Actualizar el registro en la base de datos manteniendo el historial.
- [ ] Realizar pruebas de permisos de usuario.

---

## HU-10 — Consultar mis reportes

| Atributo | Detalle |
| :--- | :--- |
| **Prioridad** | Media |
| **Story Points** | 2 |

> **Como** usuario,  
> **quiero** consultar el historial de los incidentes que yo he reportado,  
> **para** llevar mi control.  

#### Criterios de Aceptación
- El sistema debe mostrar los reportes ordenados del más reciente al más antiguo.
- Debe incluir reportes activos, resueltos y falsas alarmas.
- El usuario debe poder seleccionar un reporte para consultar sus detalles.

#### Tareas
- [ ] Crear vista de historial personal de reportes.
- [ ] Programar consulta filtrada por ID de usuario en el backend.
- [ ] Ordenar los resultados cronológicamente.
- [ ] Conectar cada elemento con su respectiva vista de detalle.
