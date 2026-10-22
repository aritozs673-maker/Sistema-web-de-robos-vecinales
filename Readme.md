# 🛡️ Proyecto de Gestión de Alertas e Inseguridad

[![Estado](https://img.shields.io/badge/Estado-En_Desarrollo-blue)](#)
[![Iteraciones](https://img.shields.io/badge/Iteraciones-8_Completadas-success)](#)
[![Historias](https://img.shields.io/badge/Historias-34_Planificadas-orange)](#)
[![Puntos](https://img.shields.io/badge/Puntos_Totales-127_Puntos-purple)](#)

Sistema integral de alertas tempranas, gestión de incidentes de inseguridad y monitoreo policial en tiempo real con integración geográfica y herramientas comunitarias.

---

## 📌 Índice de Iteraciones

Haz clic en cualquier iteración para acceder directamente a la documentación detallada de la misma:

- [🚀 Iteración 1 · Autenticación y Gestión de Usuarios](./Iteracion-1.md)
- [🚨 Iteración 2 · Reporte y Envío de Alertas](./Iteracion-2.md)
- [🗺️ Iteración 3 · Visualización Geográfica y Monitoreo](./Iteracion-3.md)
- [👥 Iteración 4 · Gestión Comunitaria y Seguimiento de Alertas](./Iteracion-4.md)
- [🔐 Iteración 5 · Control de Acceso y Roles](./Iteracion-5.md)
- [👮 Iteración 6 · Panel Policial de Atención](./Iteracion-6.md)
- [📑 Iteración 7 · Gestión Policial Avanzada](./Iteracion-7.md)
- [📊 Iteración 8 · Personalización, Estadísticas y Análisis](./Iteracion-8.md)

---

## 📊 Resumen General del Proyecto

Planificación general compuesta por **34 historias de usuario** distribuidas en **8 iteraciones**, acumulando un total de **127 puntos de historia**.

| Iteración | Objetivo Principal | Historias | Puntos | Documentación |
| :--- | :--- | :---: | :---: | :---: |
| **Iteración 1** | Registro y autenticación | 5 | 12 | [Ver Detalle](./Iteracion-1.md) |
| **Iteración 2** | Reporte y envío de alertas | 5 | 28 | [Ver Detalle](./Iteracion-2.md) |
| **Iteración 3** | Visualización geográfica y monitoreo | 5 | 22 | [Ver Detalle](./Iteracion-3.md) |
| **Iteración 4** | Gestión comunitaria y seguimiento | 5 | 15 | [Ver Detalle](./Iteracion-4.md) |
| **Iteración 5** | Roles y acceso policial | 3 | 11 | [Ver Detalle](./Iteracion-5.md) |
| **Iteración 6** | Panel policial de atención | 4 | 18 | [Ver Detalle](./Iteracion-6.md) |
| **Iteración 7** | Gestión policial avanzada | 3 | 8 | [Ver Detalle](./Iteracion-7.md) |
| **Iteración 8** | Personalización y análisis | 4 | 13 | [Ver Detalle](./Iteracion-8.md) |
| **TOTAL** | **Proyecto Completo** | **34** | **127** | — |

---

## 📋 Detalle por Iteración

<details>
<summary><b>🚀 Iteración 1 · Autenticación y Gestión de Usuarios (12 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-01 | Registrar usuario | 3 |
| HU-11 | Iniciar sesión | 3 |
| HU-12 | Recuperar contraseña * | 3 |
| HU-13 | Editar perfil de usuario | 2 |
| HU-14 | Cerrar sesión | 1 |
| **Total** | | **12** |

> **📦 Entregable:** Sistema base con cuentas de usuario, autenticación segura con bcrypt, recuperación de contraseña por correo, gestión de perfiles y control de sesiones.

📂 **[Ir al archivo de la Iteración 1](./Iteracion-1.md)**

</details>

<details>
<summary><b>🚨 Iteración 2 · Reporte y Envío de Alertas (28 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-03 | Obtener ubicación del incidente | 8 |
| HU-15 | Categorizar tipo de alerta | 3 |
| HU-16 | Adjuntar evidencia multimedia | 5 |
| HU-02 | Enviar una alerta de inseguridad | 8 |
| HU-07 | Registrar incidentes en la base de datos | 4 |
| **Total** | | **28** |

> **📦 Entregable:** Módulo operativo para la captura de geolocalización, envío rápido de alertas de inseguridad, categorización y adjunto de evidencia fotográfica, con registro permanente de cada incidente.

📂 **[Ir al archivo de la Iteración 2](./Iteracion-2.md)**

</details>

<details>
<summary><b>🗺️ Iteración 3 · Visualización Geográfica y Monitoreo (Mapa y Proximidad) (22 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-04 | Visualizar el incidente en el mapa | 5 |
| HU-06 | Consultar información detallada del incidente | 5 |
| HU-05 | Recibir alertas por cercanía | 5 |
| HU-09 | Identificar retenes policiales | 2 |
| HU-08 | Monitorear incidentes en tiempo real * | 5 |
| **Total** | | **22** |

> **📦 Entregable:** Integración de Mapbox para la visualización de marcadores de incidentes y retenes policiales, consulta de detalles, cálculo de proximidad y monitoreo de incidentes en tiempo real.

📂 **[Ir al archivo de la Iteración 3](./Iteracion-3.md)**

</details>

<details>
<summary><b>👥 Iteración 4 · Gestión Comunitaria y Seguimiento de Alertas (15 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-18 | Confirmar alerta de otro vecino | 3 |
| HU-19 | Comentar en un incidente activo * | 3 |
| HU-17 | Cancelar una falsa alarma * | 2 |
| HU-20 | Marcar incidente como resuelto | 5 |
| HU-10 | Consultar mis reportes | 2 |
| **Total** | | **15** |

> **📦 Entregable:** Herramientas de participación vecinal: confirmación y comentarios en reportes de terceros, cancelación de falsas alarmas, cambio de estado a resuelto e historial de reportes personales.

📂 **[Ir al archivo de la Iteración 4](./Iteracion-4.md)**

</details>

<details>
<summary><b>🔐 Iteración 5 · Control de Acceso y Roles (11 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-26 | Iniciar sesión como policía | 3 |
| HU-27 | Control de acceso por roles | 5 |
| HU-35 | Gestionar cuentas de policía | 3 |
| **Total** | | **11** |

> **📦 Entregable:** Acceso diferenciado por rol (Vecino, Policía y Administrador), validación del rol en cada solicitud y administración de cuentas policiales.

📂 **[Ir al archivo de la Iteración 5](./Iteracion-5.md)**

</details>

<details>
<summary><b>👮 Iteración 6 · Panel Policial de Atención (18 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-28 | Recibir alertas en el panel policial en tiempo real | 5 |
| HU-29 | Consultar el reporte completo de la alerta | 5 |
| HU-30 | Visualizar ubicación y ruta hacia el incidente | 5 |
| HU-31 | Actualizar el estado de atención de la alerta | 3 |
| **Total** | | **18** |

> **📦 Entregable:** Panel operativo para la policía con alertas en tiempo real, reporte completo, ubicación y ruta hacia el incidente, y actualización del estado de atención visible para el vecino.

📂 **[Ir al archivo de la Iteración 6](./Iteracion-6.md)**

</details>

<details>
<summary><b>📑 Iteración 7 · Gestión Policial Avanzada (8 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-32 | Filtrar y buscar alertas | 3 |
| HU-33 | Registrar observaciones policiales | 2 |
| HU-34 | Consultar historial de alertas atendidas | 3 |
| **Total** | | **8** |

> **📦 Entregable:** Filtros y búsqueda de alertas, registro inalterable de observaciones policiales e historial de alertas atendidas y falsas alarmas.

📂 **[Ir al archivo de la Iteración 7](./Iteracion-7.md)**

</details>

<details>
<summary><b>📊 Iteración 8 · Personalización, Estadísticas y Análisis (13 Pts)</b></summary>

### Historias de Usuario
| ID | Historia | Puntos |
| :--- | :--- | :---: |
| HU-21 | Configurar radio de notificaciones * | 3 |
| HU-25 | Silenciar notificaciones temporalmente * | 2 |
| HU-23 | Panel de estadísticas web * | 3 |
| HU-24 | Mapa de calor de delincuencia * | 5 |
| **Total** | | **13** |

> **📦 Entregable:** Preferencias de notificación del usuario (radio y modo no molestar) y herramientas de análisis para monitoreo y administración: estadísticas de 7 días y mapa de calor.

📂 **[Ir al archivo de la Iteración 8](./Iteracion-8.md)**

</details>\
