# Devtalles Fortune

## Descripción

Devtalles Fortune es una aplicación web avanzada desarrollada con React, diseñada para facilitar la realización de sorteos entre los miembros del canal de Discord de Devtalles. La aplicación se destaca por su integración con tecnologías modernas, ofreciendo características como escaneo de códigos QR para simplificar las inscripciones en streams y URLs compartibles para una fácil participación. Además, depende del backend proporcionado por [code-quest-backend](https://github.com/code-quest-jhlm/code-quest-backend), asegurando una experiencia de usuario fluida y segura.

## Características Principales

- **Escaneo de QR:** Facilita las inscripciones a los sorteos en transmisiones en vivo mediante códigos QR.
- **URLs Compartibles:** Permite compartir fácilmente los sorteos a través de enlaces.
- **Flexibilidad en la Creación de Sorteos:** Ofrece la posibilidad de configurar el número de premios en cada sorteo, permitiendo una personalización completa.
- **Integración con Discord:** Asegura que los miembros del canal puedan participar de manera directa y segura.
- **Dependencia del Backend:** Utiliza [code-quest-backend](https://github.com/code-quest-jhlm/code-quest-backend) para una gestión eficaz de los datos y la lógica del servidor.

## Tecnologías y Dependencias

- React 18.2.0
- Mantine para una interfaz de usuario moderna y responsiva
- Axios para solicitudes HTTP
- jwt-decode para la seguridad y decodificación de JWT
- React Router DOM para la navegación en la aplicación
- Soporte para códigos QR con `react-qrcode-logo`
- Y más, orientadas al desarrollo eficiente y la experiencia del usuario.

## Cómo Empezar

1. **Clona el repositorio:**
   ```
   git clone https://github.com/code-quest-jhlm/code-quest-frontend.git
   cd code-quest-frontend
   ```
2. **Instala las dependencias:**
   ```
   npm install
   ```
3. **Ejecuta el proyecto:**
   ```
   npm run dev
   ```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Comandos Disponibles

- `npm run dev`: Arranca el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run serve`: Sirve la versión de producción de la app.
- `npm run test`: Realiza pruebas integrales del código.
- Y otros comandos para el mantenimiento del código y preparación del entorno de desarrollo.
