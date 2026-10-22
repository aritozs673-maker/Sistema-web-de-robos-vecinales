# Gestión de Versiones y Control de Cambios

## 1. Objetivo

Definir cómo se organizan los cambios del sistema AlertaVecinal utilizando Git y GitHub.

## 2. Ramas del proyecto

- `master`: versión principal y estable del proyecto.
- `develop`: integración y pruebas de los cambios.
- `frontend`: trabajo relacionado con la interfaz.
- `backend`: trabajo relacionado con la lógica y los servicios.
- `database`: trabajo relacionado con el esquema y los scripts de base de datos.
- `documentacion`: manuales y documentación técnica.

## 3. Convención de commits

Los mensajes de commit deben ser breves, descriptivos y relacionados con los cambios realizados.

Ejemplos:

- `feat(frontend): mejorar formulario de registro`
- `fix(backend): corregir validacion de datos`
- `docs(database): actualizar documentacion del esquema`

Estos ejemplos son referencias; cada commit debe describir el cambio real.

## 4. Pull Requests

Los cambios deben proponerse mediante Pull Requests para facilitar su revisión antes de integrarlos en otra rama.

La solicitud debe incluir:

- Descripción del cambio.
- Archivos modificados.
- Pruebas realizadas.
- Observaciones o limitaciones conocidas.

## 5. Issues y tareas

Las tareas y los errores deben registrarse en GitHub Issues, asignarse a sus responsables y relacionarse con los cambios correspondientes cuando sea posible.

## 6. Versiones

El archivo CHANGELOG.md registra los cambios importantes de cada versión. Las etiquetas de versión deben crearse cuando exista una versión estable y comprobada.

## 7. Seguridad

No deben publicarse credenciales, contraseñas ni claves privadas. Antes de integrar cambios se deben revisar los archivos modificados.

## 8. Revisión y mantenimiento

Antes de integrar una modificación, se debe revisar el código, comprobar su funcionamiento y actualizar la documentación afectada.

