# 🛡️ Sistema de Gestión de Alertas e Inseguridad Ciudadana

**Plataforma de alerta temprana, gestión de incidentes y coordinación comunitaria para la prevención de la inseguridad ciudadana.**

![Estado del proyecto](https://img.shields.io/badge/Estado-En%20desarrollo-2563EB?style=for-the-badge)
![Iteraciones](https://img.shields.io/badge/Iteraciones-8-0F766E?style=for-the-badge)
![Historias de usuario](https://img.shields.io/badge/Historias-34-F59E0B?style=for-the-badge)
![Puntos de historia](https://img.shields.io/badge/Story%20Points-127-7C3AED?style=for-the-badge)

---

## 1. Descripción general

El **Sistema de Gestión de Alertas e Inseguridad Ciudadana** es un proyecto de software orientado a fortalecer la comunicación entre los ciudadanos y las autoridades responsables de la seguridad, mediante herramientas digitales para reportar incidentes, compartir información geográfica y realizar el seguimiento de alertas.

La propuesta contempla una plataforma que permita a los vecinos registrar situaciones de riesgo, adjuntar evidencias, consultar incidentes cercanos y participar en la gestión comunitaria de reportes. Asimismo, incorpora módulos orientados al personal policial para facilitar la recepción, clasificación, atención y seguimiento de las alertas registradas.

El desarrollo se organiza mediante una planificación iterativa e incremental, con ocho iteraciones que agrupan las funcionalidades en módulos definidos, historias de usuario y estimaciones de esfuerzo.

El objetivo es establecer una solución que facilite el acceso a la información, mejore la trazabilidad de los incidentes y contribuya a una respuesta más organizada ante situaciones de inseguridad.

> **Enfoque del proyecto:** prevención, participación ciudadana, información geográfica, seguimiento de incidentes y coordinación entre usuarios comunitarios y personal policial.

## 2. Objetivos del proyecto

### 2.1. Objetivo general

Diseñar y desarrollar un sistema digital de gestión de alertas de inseguridad ciudadana que permita registrar, visualizar, consultar y dar seguimiento a incidentes, promoviendo la participación comunitaria y facilitando la gestión operativa de las alertas.

### 2.2. Objetivos específicos

- Implementar mecanismos de registro, autenticación y administración de perfiles de usuario.
- Facilitar el envío de alertas con información descriptiva, clasificación del incidente, ubicación geográfica y evidencias multimedia.
- Incorporar herramientas cartográficas para localizar incidentes, identificar puntos de interés y consultar información georreferenciada.
- Promover la colaboración vecinal mediante confirmaciones, comentarios y seguimiento de reportes.
- Establecer controles de acceso diferenciados para ciudadanos, personal policial y administradores.
- Proporcionar un panel policial para gestionar las alertas, actualizar estados y documentar las actuaciones realizadas.
- Incorporar estadísticas, filtros y herramientas de análisis para facilitar la consulta de información.
- Organizar el desarrollo mediante iteraciones, historias de usuario y estimaciones de esfuerzo.

## 3. Indicadores generales

| Indicador | Valor |
|---|---:|
| Iteraciones planificadas | 8 |
| Historias de usuario planificadas | 34 |
| Puntos de historia estimados | 127 |
| Roles contemplados | 3 |
| Áreas funcionales principales | 6 |
| Modalidad de desarrollo | Iterativa e incremental |

**Nota:** los indicadores representan la planificación documentada del proyecto. No implican que todas las funcionalidades estén implementadas, probadas o desplegadas en producción.

## 4. Alcance funcional

El alcance contempla seis áreas funcionales principales.

### 4.1. Gestión de usuarios y autenticación

Incluye el registro de usuarios, inicio y cierre de sesión, recuperación de contraseña, edición del perfil y administración de cuentas según el rol correspondiente.

### 4.2. Registro y gestión de alertas

Permite contemplar el registro de incidentes, su categorización, la incorporación de evidencias, la obtención de coordenadas y el almacenamiento de los reportes.

### 4.3. Visualización geográfica y notificaciones

Comprende la representación de incidentes en un mapa, la consulta de sus detalles, el cálculo de proximidad, la identificación de puntos de interés y el monitoreo de nuevas alertas.

### 4.4. Participación y seguimiento comunitario

Incluye la confirmación de reportes, los comentarios, la gestión de falsas alarmas, el seguimiento del estado de los incidentes y la consulta del historial personal.

### 4.5. Gestión operativa policial

Contempla el acceso por roles, la recepción y clasificación de alertas, la consulta de reportes, la visualización de ubicaciones, la actualización de estados y el registro de observaciones.

### 4.6. Estadísticas y personalización

Considera las preferencias de notificación, la configuración del radio de proximidad, el silenciamiento temporal de avisos, los indicadores estadísticos y la representación de zonas con concentración de incidentes.

## 5. Arquitectura funcional por roles

| Rol | Responsabilidades principales |
|---|---|
| **Vecino** | Registrar alertas, adjuntar evidencias, consultar incidentes, confirmar reportes y realizar seguimiento. |
| **Policía** | Consultar alertas asignadas o disponibles, revisar información, actualizar estados y documentar actuaciones. |
| **Administrador** | Gestionar cuentas policiales, controlar permisos y acceder a funciones administrativas autorizadas. |

La implementación de los permisos debe validar los privilegios en el servidor o en la capa de acceso a datos correspondiente, evitando depender únicamente de los controles visuales de la interfaz.

## 6. Planificación de iteraciones

El proyecto se estructura en ocho iteraciones, organizadas de acuerdo con las funcionalidades y dependencias previstas.

| Iteración | Módulo funcional | Historias | Puntos | Documentación |
|:--|:--|--:|--:|:--|
| **01** | Autenticación y gestión de usuarios | 5 | 12 | [Consultar](./Iteracion-1.md) |
| **02** | Reporte y envío de alertas | 5 | 28 | [Consultar](./Iteracion-2.md) |
| **03** | Visualización geográfica y monitoreo | 5 | 22 | [Consultar](./Iteracion-3.md) |
| **04** | Gestión comunitaria y seguimiento | 5 | 15 | [Consultar](./Iteracion-4.md) |
| **05** | Control de acceso y roles | 3 | 11 | [Consultar](./Iteracion-5.md) |
| **06** | Panel policial de atención | 4 | 18 | [Consultar](./Iteracion-6.md) |
| **07** | Gestión policial avanzada | 3 | 8 | [Consultar](./Iteracion-7.md) |
| **08** | Personalización, estadísticas y análisis | 4 | 13 | [Consultar](./Iteracion-8.md) |
| **TOTAL** | **Planificación del proyecto** | **34** | **127** | — |

### Distribución del esfuerzo estimado

La siguiente distribución permite identificar qué iteraciones concentran una mayor proporción del esfuerzo planificado.

| Iteración | Puntos | Porcentaje aproximado |
|---|---:|---:|
| Iteración 1 | 12 | 9,4 % |
| Iteración 2 | 28 | 22,0 % |
| Iteración 3 | 22 | 17,3 % |
| Iteración 4 | 15 | 11,8 % |
| Iteración 5 | 11 | 8,7 % |
| Iteración 6 | 18 | 14,2 % |
| Iteración 7 | 8 | 6,3 % |
| Iteración 8 | 13 | 10,2 % |
| **Total** | **127** | **100 %*** |

*Los porcentajes están redondeados a un decimal; por ese motivo, su suma puede diferir ligeramente de 100 %.*

---

## 7. Documentación detallada de las iteraciones

Cada iteración cuenta con un documento independiente que permite consultar las historias de usuario, los puntos estimados y los entregables previstos.

<details>
<summary><strong>🚀 Iteración 1 — Autenticación y gestión de usuarios · 12 puntos</strong></summary>

**Objetivo:** establecer los mecanismos básicos de identificación, acceso y administración del perfil del usuario.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-01 | Registrar usuario | 3 |
| HU-11 | Iniciar sesión | 3 |
| HU-12 | Recuperar contraseña | 3 |
| HU-13 | Editar perfil de usuario | 2 |
| HU-14 | Cerrar sesión | 1 |
| | **Total** | **12** |

### Entregables previstos

- Formulario de registro y validación de datos.
- Autenticación de usuarios.
- Flujo de recuperación de contraseña mediante correo electrónico.
- Edición de información del perfil.
- Cierre de sesión y gestión de sesiones.
- Almacenamiento seguro de contraseñas mediante algoritmos apropiados de hash, como bcrypt.

**Documento:** [Ver Iteración 1](./Iteracion-1.md)

</details>

<details>
<summary><strong>🚨 Iteración 2 — Reporte y envío de alertas · 28 puntos</strong></summary>

**Objetivo:** implementar el flujo principal de registro y envío de incidentes de inseguridad.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-03 | Obtener ubicación del incidente | 8 |
| HU-15 | Categorizar tipo de alerta | 3 |
| HU-16 | Adjuntar evidencia multimedia | 5 |
| HU-02 | Enviar una alerta de inseguridad | 8 |
| HU-07 | Registrar incidentes en la base de datos | 4 |
| | **Total** | **28** |

### Entregables previstos

- Formulario para registrar una alerta.
- Captura de ubicación mediante los permisos correspondientes.
- Clasificación de incidentes por categoría.
- Adjuntos fotográficos u otras evidencias admitidas.
- Validación de los datos antes del envío.
- Persistencia de los incidentes en la base de datos.
- Confirmación del registro y tratamiento de errores de envío.

**Documento:** [Ver Iteración 2](./Iteracion-2.md)

</details>

<details>
<summary><strong>🗺️ Iteración 3 — Visualización geográfica y monitoreo · 22 puntos</strong></summary>

**Objetivo:** facilitar la consulta espacial de los incidentes y el seguimiento de las alertas cercanas.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-04 | Visualizar el incidente en el mapa | 5 |
| HU-06 | Consultar información detallada del incidente | 5 |
| HU-05 | Recibir alertas por cercanía | 5 |
| HU-09 | Identificar retenes policiales | 2 |
| HU-08 | Monitorear incidentes en tiempo real | 5 |
| | **Total** | **22** |

### Entregables previstos

- Integración cartográfica con Mapbox.
- Representación de incidentes mediante marcadores geográficos.
- Consulta de los datos asociados a cada reporte.
- Cálculo de proximidad entre la ubicación del usuario y los incidentes.
- Visualización de retenes policiales registrados.
- Actualización de información y notificaciones de nuevas alertas, según las capacidades implementadas.

**Documento:** [Ver Iteración 3](./Iteracion-3.md)

</details>

<details>
<summary><strong>👥 Iteración 4 — Gestión comunitaria y seguimiento · 15 puntos</strong></summary>

**Objetivo:** incorporar herramientas de colaboración ciudadana y seguimiento del ciclo de vida de los reportes.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-18 | Confirmar alerta de otro vecino | 3 |
| HU-19 | Comentar en un incidente activo | 3 |
| HU-17 | Cancelar una falsa alarma | 2 |
| HU-20 | Marcar incidente como resuelto | 5 |
| HU-10 | Consultar mis reportes | 2 |
| | **Total** | **15** |

### Entregables previstos

- Mecanismo para confirmar alertas de otros usuarios.
- Espacio de comentarios en los incidentes habilitados.
- Procedimiento para solicitar o registrar la cancelación de una falsa alarma.
- Actualización del estado de resolución de los incidentes.
- Historial de reportes asociados a cada usuario.
- Validaciones para evitar cambios de estado no autorizados.

**Documento:** [Ver Iteración 4](./Iteracion-4.md)

</details>

<details>
<summary><strong>🔐 Iteración 5 — Control de acceso y roles · 11 puntos</strong></summary>

**Objetivo:** establecer una separación de permisos entre los ciudadanos, el personal policial y los administradores.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-26 | Iniciar sesión como policía | 3 |
| HU-27 | Control de acceso por roles | 5 |
| HU-35 | Gestionar cuentas de policía | 3 |
| | **Total** | **11** |

### Entregables previstos

- Acceso para cuentas policiales autorizadas.
- Definición de permisos para cada rol.
- Validación de autorización en las operaciones protegidas.
- Administración de cuentas policiales.
- Restricción de acceso a funciones según los privilegios del usuario.

**Observación:** el identificador HU-35 se conserva tal como aparece en la planificación original. Debe verificarse la numeración general de las historias, ya que el proyecto declara 34 historias planificadas.

**Documento:** [Ver Iteración 5](./Iteracion-5.md)

</details>

<details>
<summary><strong>👮 Iteración 6 — Panel policial de atención · 18 puntos</strong></summary>

**Objetivo:** proporcionar una interfaz operativa para consultar y gestionar los incidentes que requieren atención policial.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-28 | Recibir alertas en el panel policial en tiempo real | 5 |
| HU-29 | Consultar el reporte completo de la alerta | 5 |
| HU-30 | Visualizar ubicación y ruta hacia el incidente | 5 |
| HU-31 | Actualizar el estado de atención de la alerta | 3 |
| | **Total** | **18** |

### Entregables previstos

- Panel de consulta de alertas.
- Visualización de los detalles y evidencias de cada reporte.
- Ubicación geográfica del incidente y consulta de rutas.
- Actualización del estado de atención.
- Registro de cambios para facilitar el seguimiento operativo.
- Comunicación de los cambios de estado a los usuarios autorizados.

**Documento:** [Ver Iteración 6](./Iteracion-6.md)

</details>

<details>
<summary><strong>📑 Iteración 7 — Gestión policial avanzada · 8 puntos</strong></summary>

**Objetivo:** optimizar la búsqueda, documentación y consulta histórica de las alertas gestionadas por el personal policial.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-32 | Filtrar y buscar alertas | 3 |
| HU-33 | Registrar observaciones policiales | 2 |
| HU-34 | Consultar historial de alertas atendidas | 3 |
| | **Total** | **8** |

### Entregables previstos

- Búsqueda de incidentes mediante criterios definidos.
- Filtros por estado, categoría y otros campos disponibles.
- Registro de observaciones vinculadas a cada incidente.
- Consulta del historial de alertas atendidas.
- Trazabilidad de las actuaciones registradas.
- Acceso restringido a la información operativa según los permisos asignados.

**Documento:** [Ver Iteración 7](./Iteracion-7.md)

</details>

<details>
<summary><strong>📊 Iteración 8 — Personalización, estadísticas y análisis · 13 puntos</strong></summary>

**Objetivo:** incorporar preferencias de notificación y herramientas de análisis que faciliten la interpretación de los incidentes registrados.

### Historias de usuario

| ID | Funcionalidad | Puntos |
|---|---|---:|
| HU-21 | Configurar radio de notificaciones | 3 |
| HU-25 | Silenciar notificaciones temporalmente | 2 |
| HU-23 | Panel de estadísticas web | 3 |
| HU-24 | Mapa de calor de delincuencia | 5 |
| | **Total** | **13** |

### Entregables previstos

- Configuración del radio de proximidad para las notificaciones.
- Preferencias para silenciar avisos temporalmente.
- Panel de indicadores y estadísticas.
- Resúmenes de incidentes registrados durante los últimos siete días.
- Representación geográfica de concentraciones de incidentes.
- Herramientas para consultar tendencias a partir de los datos disponibles.

**Consideración:** las estadísticas y los mapas de calor representan información registrada en el sistema; no deben interpretarse por sí solos como predicciones delictivas ni como evidencia de que una zona sea peligrosa.

**Documento:** [Ver Iteración 8](./Iteracion-8.md)

</details>

---

## 8. Criterios transversales de calidad

Además de las funcionalidades específicas, el proyecto contempla criterios que deben considerarse durante el diseño, la implementación y las pruebas.

### Seguridad y control de acceso

- Protección de credenciales y datos de autenticación.
- Validación de permisos para operaciones sensibles.
- Validación de datos recibidos desde formularios y solicitudes.
- Restricción del acceso a evidencias e información personal.
- Registro de operaciones relevantes cuando corresponda.

### Privacidad y protección de datos

- Solicitud de permisos para acceder a la ubicación y otros recursos del dispositivo.
- Tratamiento limitado de los datos personales a las finalidades del sistema.
- Protección de la información que pueda identificar a los usuarios o revelar su ubicación.
- Definición de reglas de conservación y eliminación de datos.
- Control de acceso a observaciones policiales y evidencias.

### Usabilidad y accesibilidad

- Interfaces comprensibles para usuarios con distintos niveles de experiencia tecnológica.
- Formularios con mensajes de validación claros.
- Diseño adaptable a los dispositivos compatibles.
- Estados de carga, confirmación y error.
- Contraste adecuado y navegación coherente.

### Integridad y trazabilidad

- Validación de los cambios de estado de cada incidente.
- Asociación de los reportes con sus autores y fechas de registro.
- Conservación de un historial de actuaciones relevantes.
- Prevención de duplicaciones y modificaciones no autorizadas.
- Diferenciación entre una alerta recibida, una alerta verificada y un incidente resuelto.

Estos criterios son lineamientos de calidad del proyecto. Su cumplimiento debe verificarse mediante implementación, pruebas y documentación técnica.

## 9. Estrategia de desarrollo

La planificación se organiza mediante un enfoque iterativo e incremental.

Cada iteración agrupa un conjunto de historias de usuario relacionadas y estima su complejidad mediante puntos de historia. La finalidad es dividir el alcance general en unidades manejables, facilitar el seguimiento del avance y permitir validar progresivamente las funcionalidades.

El flujo de trabajo propuesto es el siguiente:

1. **Planificación:** selección de historias de usuario y definición del alcance de la iteración.
2. **Análisis:** identificación de reglas de negocio, dependencias y criterios de aceptación.
3. **Diseño:** definición de interfaces, estructuras de datos y comportamiento esperado.
4. **Implementación:** desarrollo de las funcionalidades incluidas en la iteración.
5. **Pruebas:** verificación del comportamiento, las validaciones y los permisos.
6. **Documentación:** actualización de los resultados, decisiones y entregables.
7. **Revisión:** evaluación de las funcionalidades implementadas y preparación de la siguiente iteración.

Los puntos de historia representan una estimación relativa del esfuerzo y la complejidad; no equivalen directamente a horas de trabajo ni demuestran, por sí solos, que una funcionalidad haya sido completada.

## 10. Pruebas y validación

Para evaluar la calidad de la solución se propone considerar las siguientes categorías de pruebas:

| Categoría | Propósito |
|---|---|
| Pruebas funcionales | Comprobar que cada historia de usuario cumple sus criterios de aceptación. |
| Pruebas de validación | Verificar el tratamiento de datos incorrectos, incompletos o inválidos. |
| Pruebas de autorización | Confirmar que cada rol solo puede ejecutar las operaciones permitidas. |
| Pruebas de integración | Verificar la comunicación entre interfaz, base de datos y servicios externos. |
| Pruebas geográficas | Comprobar la precisión y presentación de las coordenadas disponibles. |
| Pruebas de notificaciones | Evaluar la recepción, configuración y comportamiento de los avisos. |
| Pruebas de usabilidad | Comprobar la claridad de la navegación y la comprensión de los mensajes. |
| Pruebas de regresión | Verificar que los cambios no afecten funcionalidades previamente validadas. |

Las pruebas deben documentar el escenario, los datos utilizados, el resultado esperado, el resultado obtenido y el estado de aprobación.

## 11. Consideraciones de seguridad y responsabilidad

Debido a que el sistema contempla incidentes de inseguridad y datos de ubicación, su implementación debe considerar medidas de protección acordes con la sensibilidad de la información.

- La ubicación debe utilizarse con los permisos correspondientes y de acuerdo con la finalidad del sistema.
- Las alertas ciudadanas deben diferenciarse de los incidentes confirmados por las autoridades.
- Los mecanismos de cancelación deben contemplar controles para reducir el abuso y la eliminación indebida de reportes.
- La información personal y las evidencias deben ser accesibles únicamente para los usuarios autorizados.
- Las notificaciones y los estados de atención deben reflejar la información realmente registrada.
- El sistema no debe presentarse como un sustituto de los servicios oficiales de emergencia.
- Antes de un despliegue real, deben evaluarse la seguridad, la disponibilidad, la protección de datos y los procedimientos operativos.

## 12. Estructura de la documentación

La documentación principal del proyecto se organiza en un archivo de presentación general y ocho documentos específicos.

```text
Proyecto-Gestion-Alertas/
├── README.md
├── Iteracion-1.md
├── Iteracion-2.md
├── Iteracion-3.md
├── Iteracion-4.md
├── Iteracion-5.md
├── Iteracion-6.md
├── Iteracion-7.md
└── Iteracion-8.md
```

**Nota:** la estructura anterior representa la organización documental prevista. Puede ampliarse con carpetas de código fuente, diagramas, pruebas, capturas y manuales, según la organización real del repositorio.

## 13. Estado y seguimiento del proyecto

El proyecto cuenta con una planificación de ocho iteraciones, 34 historias de usuario declaradas y 127 puntos de historia estimados.

Para mantener la documentación coherente con el avance real, se recomienda actualizar periódicamente:

- Estado de cada historia: pendiente, en desarrollo, en revisión o completada.
- Resultados de las pruebas funcionales.
- Entregables efectivamente desarrollados.
- Incidencias y tareas pendientes.
- Cambios en las estimaciones o en el alcance.
- Evidencias de ejecución y validación.

Las etiquetas del repositorio y los indicadores generales deben actualizarse cuando exista evidencia verificable del avance.

## 14. Conclusión

El Sistema de Gestión de Alertas e Inseguridad Ciudadana propone una solución digital estructurada para el registro, la visualización y el seguimiento de incidentes, integrando herramientas de participación vecinal, información geográfica y gestión operativa policial.

La planificación en ocho iteraciones permite organizar el desarrollo por módulos, establecer objetivos funcionales y mantener una documentación independiente para cada conjunto de historias de usuario.

El resultado esperado es una plataforma que facilite la comunicación, mejore la trazabilidad de los reportes y proporcione herramientas para consultar y gestionar información relacionada con la seguridad ciudadana, siempre que las funcionalidades previstas se implementen y validen satisfactoriamente.

---

**Documentación del proyecto:** [Iteración 1](./Iteracion-1.md) · [Iteración 2](./Iteracion-2.md) · [Iteración 3](./Iteracion-3.md) · [Iteración 4](./Iteracion-4.md) · [Iteración 5](./Iteracion-5.md) · [Iteración 6](./Iteracion-6.md) · [Iteración 7](./Iteracion-7.md) · [Iteración 8](./Iteracion-8.md)

*Documento de planificación y seguimiento del proyecto de software.*
