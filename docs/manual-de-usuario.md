# Manual de usuario — AlertaVecinal

Sistema de alerta comunitaria para la prevención de robos. Funciona desde cualquier navegador (computadora o celular).

**Acceso:** https://aritozs673-maker.github.io/Sistema-web-de-robos-vecinales/

## 1. Requisitos
- Navegador actualizado (Chrome, Edge, Firefox, Safari).
- Conexión a internet.
- Permitir la **ubicación** cuando el navegador la solicite.

## 2. Roles
| Rol | Qué puede hacer |
|---|---|
| **Vecino** | Reportar incidentes, verlos en el mapa, confirmar, comentar, consultar su historial y revisar estadísticas. |
| **Policía** | Recibir alertas en tiempo real, cambiar estado de atención, registrar observaciones, ver ruta y estadísticas. |
| **Administrador** | Gestionar cuentas policiales, retenes, corregir ubicaciones antiguas y supervisar estadísticas. |

## 3. Vecino
### 3.1 Registrarse (HU-01)
1. En la pantalla de acceso pulsa **Registrarse**.
2. Completa nombre, celular, correo y contraseña.
3. Pulsa **Crear cuenta**. El correo debe tener formato válido y no estar registrado.

### 3.2 Iniciar sesión (HU-11)
1. Escribe correo y contraseña → **Ingresar**.
2. Si hay error verás *"Correo o contraseña inválidos"*.
3. Según tu rol, el sistema te lleva a tu pantalla principal o al panel policial.

### 3.3 Enviar una alerta (HU-02, HU-03, HU-15)
1. Entra a **Mapa de alertas** y pulsa **📍 Marcar incidente en el mapa**.
2. Toca la calle donde ocurre el hecho; aparece un marcador naranja (puedes arrastrarlo). El botón *Obtener mi ubicación* muestra tu posición personal (punto azul).
3. Pulsa **Crear reporte en este lugar**.
4. Elige la **categoría** (🆘 Emergencia, 🚨 Robo, etc.), escribe una **referencia de ubicación de 5–160 caracteres**, describe lo ocurrido en **12–1500 caracteres** y, si quieres, adjunta una foto JPG/PNG/WebP de máximo 10 MB.
5. Confirma el envío. El punto elegido debe tener latitud y longitud válidas. Verás un mensaje con el código de reporte. Si falla el envío, puedes corregir o volver a intentar sin que el formulario se bloquee.

### 3.4 Ver incidentes en el mapa (HU-04, HU-06)
- Cada incidente es un pin con el icono de su categoría.
- Al tocar un pin se muestra una tarjeta con la descripción; **Ver reporte completo** muestra fecha, hora, ubicación, categoría y foto.

### 3.5 Alertas por cercanía (HU-05)
Si hay un incidente dentro de tu zona de cobertura recibes un aviso de *incidente cercano*. Puedes ajustar el radio y activar *No molestar* en tus preferencias.

### 3.6 Mis reportes
Lista de tus reportes del más reciente al más antiguo, con su estado (activo, resuelto, falsa alarma).

### 3.7 Estadísticas e historial interactivo
En el menú **Estadísticas**, revisa los totales, las categorías y la gráfica de los últimos siete días. Coloca el cursor sobre cada barra o pulsa **Tab** para ver la fecha, la cantidad, los tipos y los estados registrados. La gráfica del panel inicial también tiene esta información. Los totales globales requieren ejecutar `supabase/upgrade_security_statistics.sql`. La información mostrada nunca incluye datos personales ajenos.


## 4. Policía
1. Inicia sesión con tu cuenta institucional.
2. En el panel verás las alertas nuevas ordenadas por fecha; usa los filtros para buscar.
3. Abre una alerta para ver el detalle completo, cambia su estado (Recibida, En camino, Atendida, Falsa alarma) y registra observaciones.
4. En **Mapa → Activar avisos** acepta las notificaciones del navegador (funciona con la pestaña abierta).

## 5. Administrador
Desde su panel registra, activa o desactiva cuentas de policía, administra retenes, corrige ubicaciones antiguas y revisa estadísticas históricas. La policía también puede abrir **Estadísticas** desde su propio menú.

## 6. Problemas frecuentes
| Problema | Solución |
|---|---|
| No aparece mi ubicación | Permite la ubicación en el candado de la barra de direcciones y recarga. |
| "Acceso denegado" | Tu rol no tiene permiso para esa pantalla. |
| El mapa no carga | Revisa tu conexión; sin token de Mapbox se muestra una vista alternativa. |
| Las estadísticas están incompletas | El administrador debe ejecutar `supabase/upgrade_security_statistics.sql` en SQL Editor; GitHub Pages no realiza este paso automáticamente. |
| El formulario no se envía | Verifica referencia, descripción, ubicación elegida en el mapa y formato/tamaño de la foto. |

> 📸 Agregar capturas en `docs/capturas/` y enlazarlas en cada sección antes de la exposición.
