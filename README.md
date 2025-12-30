# Veterinary Management PWA

Una aplicación web progresiva (PWA) para la gestión de citas veterinarias. Permite administrar pacientes, propietarios y síntomas de manera eficiente, con una interfaz moderna y adaptada a dispositivos móviles.

## Demo

Puedes ver el proyecto en funcionamiento aquí: [Veterinary Management PWA](https://veterinary-management-pwa-js.vercel.app/)

![Demo del proyecto](veterinary-management-pwa-js.gif)

## Características

- **Gestión de Citas (CRUD)**:
  - **Crear**: Agendar nuevas citas veterinarias con detalles completos.
  - **Leer**: Visualizar el listado de todas las citas programadas.
  - **Actualizar**: Editar la información de las citas existentes.
  - **Eliminar**: Cancelar o borrar citas del registro.
- **PWA (Progressive Web App)**: Instalable en dispositivos de escritorio y móviles, con soporte offline básico mediante Service Workers.
- **Interfaz Adaptable**: Diseño responsivo utilizando **Bootstrap 4** y CSS personalizado.
- **Validaciones**: Validación en tiempo real de formularios para asegurar la integridad de los datos.
- **Notificaciones**: Alertas visuales para confirmar acciones (creación, edición) o mostrar errores.
- **Persistencia Temporal**: Los datos se manejan en memoria durante la sesión (nota: se resetearán al recargar la página en esta versión base).

## Tecnologías utilizadas

- **HTML5**: Estructura semántica de la aplicación.
- **Bootstrap 4**: Framework CSS para el diseño de la interfaz y la grilla responsiva.
- **JavaScript (ES6+)**:
  - **Clases**: Programación Orientada a Objetos para la lógica de negocio (`Citas`) y la interfaz (`UI`).
  - **Service Workers**: Para funcionalidad PWA e instalación.
- **CSS3**: Estilos personalizados y fuentes de Google Fonts (Poppins).

## Instalación y requisitos

Este proyecto es una aplicación estática, por lo que no requiere una instalación compleja de backend.

1.  **Clonar el repositorio**

    ```bash
    git clone https://github.com/mariokarajallo/veterinary-management-pwa-js.git
    cd veterinary-management-pwa-js
    ```

2.  **Ejecutar la App**

    - Simplemente abre el archivo `index.html` en tu navegador web.
    - **Recomendado**: Para probar las funcionalidades de PWA (Service Workers), es necesario servir los archivos a través de un servidor local. Si usas VS Code, puedes instalar la extensión **"Live Server"**, hacer clic derecho en `index.html` y seleccionar **"Open with Live Server"**.

## Cómo funciona

La aplicación utiliza un enfoque orientado a objetos para separar la lógica de los datos de la lógica de la interfaz.

1.  **Crear Cita**:

    - Llena el formulario con los datos de la mascota, propietario, contacto, fecha, hora y síntomas.
    - Al presionar "Agendar Cita", se valida que no haya campos vacíos.
    - Si es válido, se crea un objeto cita y se agrega al administrador de citas.

2.  **Gestionar Estado**:

    - La clase `UI` se encarga de recibir las actualizaciones del administrador de citas e imprimir el HTML correspondiente en la tabla.
    - Se muestran alertas de éxito o error según la acción.

3.  **Service Worker**:
    - El archivo `sw.js` se registra al iniciar la aplicación (gestionado en `app.js`), permitiendo que el navegador reconozca la web como una aplicación instalable.

### Validaciones

- **Campos Obligatorios**: Todos los campos del formulario son requeridos. Si alguno está vacío, se mostrará una alerta roja indicando "Todos los mensajes son Obligatorios".
- **Integridad de Datos**: Se utiliza un objeto global `citaObj` que se actualiza con los eventos `input`, asegurando que los datos estén listos antes de enviar.

## Estructura de archivos

```bash
veterinary-management-PWA-js-1/
├── css/
│   ├── bootstrap.css       # Framework Bootstrap local
│   └── styles.css          # Estilos personalizados principales
├── img/
│   └── icons/              # Iconos para la PWA (manifest de aplicación)
├── js/
│   ├── app.js              # Punto de entrada y registro del Service Worker
│   ├── apv.js              # Lógica principal: Clases Citas, UI, eventos y funciones
│   └── ...                 # Otros scripts de soporte
├── .git/                   # Control de versiones
├── error.html              # Página de fallback para errores
├── index.html              # Vista principal (Dashboard y Formulario)
├── manifest.json           # Configuración de instalación PWA
├── sw.js                   # Service Worker para capacidades offline/PWA
└── README.md               # Documentación del proyecto
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

### Pasos a seguir

1.  Haz un **Fork** del repositorio.
2.  Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz **Commit** (`git commit -m 'Agregar nueva funcionalidad'`).
4.  Haz **Push** a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un **Pull Request**.

### Sugerencias

- **Persistencia Local**: Implementar `LocalStorage` o `IndexedDB` para que las citas no se pierdan al recargar.
- **Notificaciones Push**: Agregar recordatorios de citas mediante notificaciones nativas.

## Créditos

- **Juan Pablo De la Torre Valdez** - Instructor y autor del contenido del curso - [Codigo Con Juan](https://codigoconjuan.com/).
- **Mario Karajallo** - Implementación del proyecto y mantenimiento - [Mario Karajallo](https://karajallo.com).

## Licencia

Este proyecto está bajo la licencia MIT. Véase `LICENSE` para más detalles.

---

⌨️ con ❤️ por [Mario Karajallo](https://karajallo.com)
