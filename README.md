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

## 🧰 Tecnologías
HTML5 · CSS3 · JavaScript · Supabase (Auth, PostgreSQL, Realtime, Storage) · Mapbox GL · GitHub Pages · Git/GitHub

## 📁 Estructura del repositorio
```text
Sistema-web-de-robos-vecinales/
├── index.html              # Entrada de la aplicación
├── css/styles.css          # Estilos
├── js/
│   ├── app.js              # Lógica de la aplicación
│   └── config.js           # Claves PÚBLICAS (Supabase / Mapbox)
├── supabase/               # Base de datos
│   ├── schema.sql
│   ├── upgrade_location_media.sql
│   ├── upgrade_interactive_dispatch.sql
│   └── functions/          # Edge Functions
├── docs/                   # Documentación
│   ├── Historias_de_usuario.docx
│   ├── manual-de-usuario.md
│   ├── gestion-del-proyecto.md
│   ├── guia-instalacion.md
│   ├── guia-mapa-despacho.md
│   ├── guion-exposicion.md
│   └── capturas/
├── scripts/setup_github.sh # Crea etiquetas, hitos e issues
├── .github/                # Plantillas de Issues y Pull Requests
├── CONTRIBUTING.md         # Flujo de trabajo del equipo
├── CHANGELOG.md            # Historial de versiones
└── README.md
```
> `index.html`, `css/` y `js/` se mantienen en la raíz porque GitHub Pages publica desde allí.

## ▶️ Ejecutar localmente
1. `git clone https://github.com/aritozs673-maker/Sistema-web-de-robos-vecinales.git`
2. Abrir la carpeta en VS Code y ejecutar `index.html` con **Live Server**.
3. Sin claves configuradas funciona el **modo demo** (botones *Probar vecino / policía / admin*).
4. Para usar la base de datos real, ver [`docs/guia-instalacion.md`](docs/guia-instalacion.md).

## 🌿 Flujo de trabajo (resumen)
`main` (estable, versiones) ← `develop` (integración) ← `feature/HU-XX-nombre` (una por historia).
Todo cambio entra por **Pull Request** con al menos 1 revisión. Detalle en [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 🏷️ Versiones
Ver [`CHANGELOG.md`](CHANGELOG.md) y la sección *Releases* del repositorio.

## 📚 Documentación
- [Manual de usuario](docs/manual-de-usuario.md)
- [Gestión del proyecto: ramas, issues y tablero](docs/gestion-del-proyecto.md)
- [Historias de usuario](docs/Historias_de_usuario.docx)
- [Guion de exposición](docs/guion-exposicion.md)
  
