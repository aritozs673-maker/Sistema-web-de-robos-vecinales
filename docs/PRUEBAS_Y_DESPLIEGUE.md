# Lista de verificación de AlertaVecinal (noviembre 2026)

## Entrega completa
La carpeta conserva `css/`, `docs/`, `img/`, `js/`, `supabase/`, `index.html`, `README.md` y `CONTRIBUTING.md`.

## Pruebas de interfaz
- [ ] **Vecino:** iniciar sesión; ver en el menú **Estadísticas**; abrirla y pasar el cursor sobre cada barra de los siete días. Ver fecha, total y categorías/estados.
- [ ] **Policía:** abrir el panel de estadísticas, ver la misma gráfica y comprobar estados y filtros de su retén.
- [ ] **Administrador:** abrir estadísticas y verificar que aparecen todos los estados y categorías.
- [ ] **Reporte inválido:** bloquear descripción menor de 12 caracteres, categoría incorrecta, ubicación sin GPS elegida, coordenadas fuera de rango y foto que no sea JPG/PNG/WebP o que supere 10 MB.
- [ ] **Reporte válido:** desde Vecino, seleccionar punto del incidente en el mapa, indicar calle/referencia (5–160 caracteres), descripción (12–1500) y confirmar. Comprobar nuevo código en el mapa y gráfico del día.
- [ ] **Error de red:** el botón de envío permite volver a intentar. Las alertas sin conexión se sincronizan solo cuando vuelve a entrar el usuario original.
- [ ] **Responsive:** probar la barra lateral, paneles, gráficas y modal de reporte en escritorio y móvil.

## Pruebas reales de Supabase (obligatorias antes de una exposición con cuentas reales)
1. En **SQL Editor**, ejecutar el nuevo `supabase/upgrade_security_statistics.sql` después de los otros upgrades. Este script no elimina reportes antiguos.
2. Iniciar sesión como vecino real, policía real y administrador real. Para los tres, confirmar que la sección **Estadísticas** muestra información agregada del historial, aunque no puedan leer reportes privados por separado.
3. Comprobar que la función SQL `community_statistics()` devuelve **solo totales por categoría, estado y fecha**, sin identificadores, descripciones, nombres ni ubicaciones.
4. Comprobar desde las herramientas de Supabase que un vecino **no puede cambiar** el `status` de un incidente con el permiso de vecino.
5. Comprobar que la policía puede cambiar el estado de un incidente de su ámbito y no puede alterar su descripción, propietario ni ubicación.
6. Comprobar que el administrador puede corregir la ubicación de un incidente antiguo desde su panel.
7. Confirmar que `js/config.js` contiene solo la clave **publicable** de Supabase y el token **público** de Mapbox. Jamás subir `service_role`.

## Cómo subirlo a GitHub en `master`
1. **Guarda antes una copia de seguridad** de la rama actual.
2. Descomprime el ZIP corregido, sin duplicar la carpeta raíz. Copia el contenido completo encima de tu directorio local del repositorio y revisa los cambios.
3. Si tu cuenta tiene permiso de escritura: `git status`, `git add .`, `git commit -m "fix: validación de reportes y estadísticas para todos los roles"` y `git push origin master`.
4. Verifica el despliegue de GitHub Pages y prueba las cuentas reales.
5. La **migración SQL se ejecuta por separado** en Supabase; subir el archivo `.sql` a GitHub no cambia la base de datos.

## Alcance de las verificaciones automáticas
Se ejecutaron controles locales de sintaxis JavaScript y de navegación/formulario en modo demostración. **No es equivalente a probar Supabase real ni la actualización desde una instalación existente**. Para completar esas pruebas hace falta acceso al proyecto de Supabase con autorización administrativa.
