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
| **Vecino** | Reportar incidentes, verlos en el mapa, confirmar, comentar, consultar su historial. |
| **Policía** | Recibir alertas en tiempo real, cambiar estado de atención, registrar observaciones, ver ruta. |
| **Administrador** | Gestionar cuentas policiales, retenes y supervisar estadísticas. |

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
4. Elige la **categoría** (🆘 Emergencia, 🚨 Robo, etc.), describe lo ocurrido y, si quieres, adjunta una foto.
5. Confirma el envío. Verás un mensaje de que la alerta fue registrada.

### 3.4 Ver incidentes en el mapa (HU-04, HU-06)
- Cada incidente es un pin con el icono de su categoría.
- Al tocar un pin se muestra una tarjeta con la descripción; **Ver reporte completo** muestra fecha, hora, ubicación, categoría y foto.

### 3.5 Alertas por cercanía (HU-05)
Si hay un incidente dentro de tu zona de cobertura recibes un aviso de *incidente cercano*. Puedes ajustar el radio y activar *No molestar* en tus preferencias.

### 3.6 Mis reportes
Lista de tus reportes del más reciente al más antiguo, con su estado (activo, resuelto, falsa alarma).

## 4. Policía
1. Inicia sesión con tu cuenta institucional.
2. En el panel verás las alertas nuevas ordenadas por fecha; usa los filtros para buscar.
3. Abre una alerta para ver el detalle completo, cambia su estado (Recibida, En camino, Atendida, Falsa alarma) y registra observaciones.
4. En **Mapa → Activar avisos** acepta las notificaciones del navegador (funciona con la pestaña abierta).

## 5. Administrador
Desde su panel registra, activa o desactiva cuentas de policía, administra retenes y revisa estadísticas de los últimos 7 días.

## 6. Problemas frecuentes
| Problema | Solución |
|---|---|
| No aparece mi ubicación | Permite la ubicación en el candado de la barra de direcciones y recarga. |
| "Acceso denegado" | Tu rol no tiene permiso para esa pantalla. |
| El mapa no carga | Revisa tu conexión; sin token de Mapbox se muestra una vista alternativa. |
