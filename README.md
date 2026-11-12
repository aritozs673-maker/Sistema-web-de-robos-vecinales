# 🚨 AlertaVecinal — Sistema Web de Alerta Comunitaria para la Prevención de Robos

Sistema web basado en geolocalización, mapas (Mapbox) y base de datos en tiempo real (Supabase) para que los vecinos reporten incidentes de inseguridad y la policía pueda atenderlos con rapidez.

**Equipo DHAAP** · Proyecto de Sistemas · Metodología XP (8 iteraciones)

🌐 **Demo en línea:** https://aritozs673-maker.github.io/Sistema-web-de-robos-vecinales/

## 🎯 Problema
La seguridad vecinal depende de llamadas y grupos de mensajería: no hay ubicación exacta, hay demoras de respuesta y falta coordinación con los retenes policiales. Este sistema centraliza los reportes en un mapa con roles diferenciados (Vecino, Policía, Administrador).

## 👥 Equipo

| Integrante | Rol | Historias principales |
|---|---|---|
| Alexander Condori Nina | Líder | HU-11 Iniciar sesión |
| Harold Carpio Santader | Comunicador | HU-01 Registrar usuario |
| Denis Medrano Carrasco | Desarrollador | HU-02 Enviar alerta, HU-03 Ubicación |
| Ariana Patzi Gonzales | Diseñadora | HU-15 Categorías, HU-04 Mapa |
| Pablo Zaconeta Guanca | Analista | HU-05 Cercanía, HU-06 Detalle |

## ✨ Novedades de esta versión (noviembre 2026)
- **Diseño moderno** azul y dorado, con modo claro/oscuro automático, letra ajustable (`A−` / `A+`), animaciones y sonido al pasar el cursor.
- **Alertas por cercanía:** se avisa solo si el incidente cae dentro del radio configurado en Preferencias.
- **Silencio temporal:** 15 min, 1 h, 8 h o hasta las 7:00 del día siguiente.
- **Tiempo real:** Supabase Realtime con respaldo cada 15 s.
- **Ruta al incidente** con Mapbox Directions (distancia y minutos).
- **Mapa interactivo y despacho policial:** el vecino elige el lugar exacto del incidente en el mapa y la policía hace seguimiento de la intervención.
- **Recuperar contraseña** con validación.
- **Ilustraciones propias** (`img/`) y fotos opcionales (`img/photos/`).
- **Edge Function** `admin-create-police` para crear cuentas policiales de forma segura.
- **Estadísticas para todos los roles:** vecinos, policía y administradores cuentan con una sección de estadísticas y una gráfica semanal interactiva.
- **Historial al pasar el cursor:** cada barra muestra la fecha, el número de reportes y el desglose por categoría y estado. También funciona con Tab para navegación mediante teclado.
- **Historial global privado:** la función `community_statistics()` devuelve únicamente cantidades agregadas a los tres roles, sin mostrar detalles de reportes restringidos, nombres, teléfonos ni coordenadas.
- **Validaciones de reportes:** categoría, descripción (12–1500 caracteres), dirección o referencia (5–160 caracteres), ubicación geográfica y foto JPG/PNG/WebP de máximo 10 MB; errores de envío recuperables.
- **Seguridad reforzada:** los vecinos no pueden modificar directamente el estado de sus reportes; la policía solo puede cambiar estados en incidentes de su ámbito y los administradores pueden corregir ubicaciones antiguas. Incluye protección de perfil y sincronización offline vinculada a la cuenta original.


## 📱 Descarga la app (Android)
Además de la versión web, AlertaVecinal cuenta con una app para Android, gratuita. Escanea el código QR con la cámara de tu celular:

<p align="center">
  <img src="img/afiche-descarga-app.png" alt="Afiche: descarga la app AlertaVecinal para Android escaneando el código QR" width="360">
</p>

1. Escanea el código y descarga el archivo.
2. Ábrelo y permite «instalar apps desconocidas».
3. Si Play Protect avisa: «Instalar de todas formas».
4. Inicia sesión y permite la ubicación «todo el tiempo».

Código fuente de la app: [DenisTae/alertavecinal-app](https://github.com/DenisTae/alertavecinal-app)

## 🧰 Tecnologías
HTML5 · CSS3 · JavaScript · Supabase (Auth, PostgreSQL, Realtime, Storage, Edge Functions) · Mapbox GL · GitHub Pages · Git/GitHub

## 📁 Estructura del repositorio
```text
Sistema-web-de-robos-vecinales/
├── index.html                # Entrada de la aplicación
├── css/
│   ├── styles.css            # Estilos base
│   ├── modern.css            # Diseño moderno, tema oscuro, animaciones
│   └── futuro.css            # Estilos de la capa de mejoras avanzadas
├── js/
│   ├── app.js                # Lógica de la aplicación
│   ├── enhancements.js       # Mejoras: cercanía, silencio, ruta, tiempo real
│   ├── futuro.js             # Funciones avanzadas de interfaz
│   └── config.js             # Claves PÚBLICAS (Supabase / Mapbox)
├── img/                      # Ilustraciones SVG y afiche de descarga
│   ├── afiche-descarga-app.png  # Afiche con QR de la app Android
│   └── photos/               # Fotos reales opcionales (ver LEEME.txt)
├── supabase/                 # Base de datos
│   ├── schema.sql
│   ├── upgrade_location_media.sql
│   ├── upgrade_interactive_dispatch.sql
│   ├── upgrade_security_statistics.sql   # NUEVO: validaciones, RLS, RPC de estadísticas
│   └── functions/            # Edge Functions
│       ├── _shared/cors.ts
│       └── admin-create-police/index.ts
├── docs/                     # Documentación
│   ├── Historias_de_usuario.docx
│   ├── manual-de-usuario.md
│   ├── gestion-del-proyecto.md
│   ├── guia-instalacion.md
│   ├── guia-mapa-despacho.md
│   ├── guion-exposicion.md
│   ├── PRUEBAS_Y_DESPLIEGUE.md
│   └── capturas/
├── CONTRIBUTING.md           # Flujo de trabajo del equipo
└── README.md
```
> `index.html`, `css/`, `js/` e `img/` se mantienen en la raíz porque GitHub Pages publica desde allí.

## ▶️ Ejecutar localmente
1. `git clone https://github.com/aritozs673-maker/Sistema-web-de-robos-vecinales.git`
2. Abrir la carpeta en VS Code y ejecutar `index.html` con **Live Server**.
3. Si no carga la biblioteca de Supabase o no están configuradas las claves, funciona el **modo demo** (botones *Probar vecino / policía / admin*). La demostración es local y **no** prueba los permisos reales de Supabase.
4. Para usar la base de datos real, ver [`docs/guia-instalacion.md`](docs/guia-instalacion.md).

## 🔑 Configuración de claves
Edita `js/config.js` con la URL y la clave **publicable** de Supabase y un token **público** de Mapbox (`pk.…`). Nunca pongas `service_role` ni tokens secretos en el navegador. Restringe el token de Mapbox a tu dominio de GitHub Pages.

## 🗄️ Base de datos (orden de ejecución en Supabase → SQL Editor)
1. `supabase/schema.sql`
2. `supabase/upgrade_location_media.sql`
3. `supabase/upgrade_interactive_dispatch.sql`
4. **`supabase/upgrade_security_statistics.sql` — obligatorio para estadísticas históricas completas, validación y permisos reforzados.**

Si la base de datos ya existe, **no es necesario volver a crear las tablas ni borrar datos**: ejecuta **solo** `upgrade_security_statistics.sql` después de confirmar que los otros upgrades ya fueron ejecutados.

⚠️ **Subir este ZIP a GitHub Pages NO ejecuta el SQL automáticamente.** Debes abrir Supabase → SQL Editor, ejecutar la migración y verificar las políticas; hasta entonces, las gráficas mostrarán los datos visibles del usuario, que pueden ser parciales.

Para recuperar contraseña, agrega la URL de GitHub Pages en *Authentication → URL Configuration → Redirect URLs*.

## 📤 Publicar esta versión en la rama `master`
1. **Descarga primero una copia de seguridad** del repositorio actual (Code → Download ZIP).
2. Abre la rama **`master`** en GitHub. Sustituye los archivos modificados, conservando **todas** las carpetas y archivos del ZIP. No borres el repositorio ni sus ajustes de GitHub Pages.
3. Desde VS Code puedes reemplazar archivos localmente, revisar `git status`, ejecutar `git add .`, `git commit -m "fix: reportes, gráficas por rol e historial interactivo"` y `git push origin master`, siempre que tu cuenta tenga permiso de escritura.
4. Ejecuta en Supabase la migración SQL indicada arriba y verifica los casos del [plan de pruebas](docs/PRUEBAS_Y_DESPLIEGUE.md).
5. En GitHub Pages confirma que la fuente de publicación sigue configurada como `master` / raíz.

**Advertencia:** modificar archivos desde tu GitHub no cambia la base de datos Supabase por sí mismo. Nunca subas tokens `service_role`, contraseñas ni credenciales secretas.

Las normas generales de colaboración están en [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 📚 Documentación
- [Manual de usuario](docs/manual-de-usuario.md)
- [Gestión del proyecto: ramas, issues y tablero](docs/gestion-del-proyecto.md)
- [Historias de usuario](docs/Historias_de_usuario.docx)
- [Guion de exposición](docs/guion-exposicion.md)
- [Pruebas, permisos y despliegue](docs/PRUEBAS_Y_DESPLIEGUE.md)
  
