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

## ✨ Novedades de esta versión (octubre 2026)
- **Diseño moderno** azul y dorado, con modo claro/oscuro automático, letra ajustable (`A−` / `A+`), animaciones y sonido al pasar el cursor.
- **Alertas por cercanía:** se avisa solo si el incidente cae dentro del radio configurado en Preferencias.
- **Silencio temporal:** 15 min, 1 h, 8 h o hasta las 7:00 del día siguiente.
- **Tiempo real:** Supabase Realtime con respaldo cada 15 s.
- **Ruta al incidente** con Mapbox Directions (distancia y minutos).
- **Mapa interactivo y despacho policial:** el vecino elige el lugar exacto del incidente en el mapa y la policía hace seguimiento de la intervención.
- **Recuperar contraseña** con validación.
- **Ilustraciones propias** (`img/`) y fotos opcionales (`img/photos/`).
- **Edge Function** `admin-create-police` para crear cuentas policiales de forma segura.

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
├── img/                      # Ilustraciones SVG
│   └── photos/               # Fotos reales opcionales
├── supabase/                 # Base de datos
│   ├── schema.sql
│   ├── upgrade_location_media.sql
│   ├── upgrade_interactive_dispatch.sql
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
│   └── capturas/
├── CONTRIBUTING.md           # Flujo de trabajo del equipo
└── README.md
```
> `index.html`, `css/`, `js/` e `img/` se mantienen en la raíz porque GitHub Pages publica desde allí.

## ▶️ Ejecutar localmente
1. `git clone https://github.com/aritozs673-maker/Sistema-web-de-robos-vecinales.git`
2. Abrir la carpeta en VS Code y ejecutar `index.html` con **Live Server**.
3. Sin claves configuradas funciona el **modo demo** (botones *Probar vecino / policía / admin*).
4. Para usar la base de datos real, ver [`docs/guia-instalacion.md`](docs/guia-instalacion.md).

## 🔑 Configuración de claves
Edita `js/config.js` con la URL y la clave **publicable** de Supabase y un token **público** de Mapbox (`pk.…`). Nunca pongas `service_role` ni tokens secretos en el navegador. Restringe el token de Mapbox a tu dominio de GitHub Pages.

## 🗄️ Base de datos (orden de ejecución en Supabase → SQL Editor)
1. `supabase/schema.sql`
2. `supabase/upgrade_location_media.sql`
3. `supabase/upgrade_interactive_dispatch.sql`

Para recuperar contraseña, agrega la URL de GitHub Pages en *Authentication → URL Configuration → Redirect URLs*.

## 🌿 Flujo de trabajo (resumen)
`main` (estable, versiones) ← `develop` (integración) ← `feature/HU-XX-nombre` (una por historia).
Todo cambio entra por **Pull Request** con al menos 1 revisión. Detalle en [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 📚 Documentación
- [Manual de usuario](docs/manual-de-usuario.md)
- [Gestión del proyecto: ramas, issues y tablero](docs/gestion-del-proyecto.md)
- [Historias de usuario](docs/Historias_de_usuario.docx)
- [Guion de exposición](docs/guion-exposicion.md)
