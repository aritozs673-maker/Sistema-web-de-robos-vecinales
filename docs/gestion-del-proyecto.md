# Gestión del proyecto

## 1. Historias de usuario elegidas por iteración
| Iter. | HU | Historia | Pts | Responsable (propuesto) | Rama |
|---|---|---|---|---|---|
| 1 | HU-01 | Registrar usuario | 3 | Harold | `feature/HU-01-registrar-usuario` |
| 1 | HU-11 | Iniciar sesión | 2 | Alexander | `feature/HU-11-iniciar-sesion` |
| 2 | HU-03 | Obtener ubicación del incidente | 3 | Denis | `feature/HU-03-obtener-ubicacion` |
| 2 | HU-02 | Enviar una alerta de inseguridad | 5 | Denis | `feature/HU-02-enviar-alerta` |
| 3 | HU-15 | Categorizar tipo de alerta | 2 | Ariana | `feature/HU-15-categorias` |
| 3 | HU-04 | Visualizar incidente en el mapa | 5 | Ariana | `feature/HU-04-mapa-incidentes` |
| 4 | HU-05 | Recibir alertas por cercanía | 5 | Pablo | `feature/HU-05-alertas-cercania` |
| 4 | HU-06 | Información detallada del incidente | 3 | Pablo | `feature/HU-06-detalle-incidente` |

Transversal: Alexander (líder) coordina y revisa PR; Harold (comunicador) mantiene `CHANGELOG.md` y avisos; Pablo (analista) redacta el manual de usuario; Ariana revisa el diseño en cada PR.

## 2. Modelo de ramas
```
main      ●────────────●─────────────●─────────────●   (tags v0.1.0, v0.2.0 ... v1.0.0)
           \          /  \          /
develop     ●──●──●──●    ●──●──●──●
             \  /          \  /
feature/*     ●●            ●●
```

## 3. Tablero (GitHub Projects)
Columnas: Backlog · Por hacer · En progreso · En revisión · Hecho.
Se activan las automatizaciones: issue cerrado → *Hecho*; PR abierto → *En revisión*.

## 4. Gestión de versiones
| Tag | Contenido |
|---|---|
| v0.1.0 | Iteración 1: registro e inicio de sesión |
| v0.2.0 | Iteración 2: ubicación y envío de alerta |
| v0.3.0 | Iteración 3: categorías y mapa |
| v0.4.0 | Iteración 4: cercanía y detalle |
| v1.0.0 | Entrega final con manual de usuario |

## 5. Definición de "terminado" (contrato de equipo)
Entregado a tiempo · cumple la HU · revisado por otro integrante · funciona integrado · problemas comunicados antes de la fecha.

