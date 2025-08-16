# Proyecto Formulario Parcial

Este es un formulario de ejemplo desarrollado con React para el frontend y Node.js para el backend. Los datos se guardan en un archivo Excel.

## Estructura del Proyecto

El proyecto está organizado en una estructura de monorepo simple, lo que significa que la aplicación frontend y el servidor backend residen en la misma carpeta raíz, pero en directorios separados.


### **`client/` (El Frontend)**

* **Tecnología:** Desarrollado con **React.js**.
* **Función:** Es la interfaz de usuario que el usuario ve y con la que interactúa en el navegador. Se encarga de mostrar el formulario, manejar las entradas del usuario, realizar validaciones básicas y enviar los datos al backend.

### **`server/` (El Backend)**

* **Tecnología:** Desarrollado con **Node.js** y **Express.js**.
* **Función:** Es el servidor que se ejecuta en tu máquina local. Recibe los datos enviados por el frontend, los procesa y los guarda de forma estructurada en un archivo ubicado dentro de esta misma carpeta. También maneja la lógica para actualizar registros existentes o añadir nuevos.

## Cómo Clonar y Ejecutar el Proyecto Localmente

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:

* **Node.js y npm:** Puedes descargarlo desde [nodejs.org](https://nodejs.org/). `npm` se instala junto con Node.js.
* **Git:** Para clonar el repositorio. Puedes descargarlo desde [git-scm.com](https://git-scm.com/).

### **Pasos de Configuración y Ejecución**

1.  **Clonar el Repositorio:**
    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el repositorio en tu computadora:

    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    # Asegúrate de reemplazar [URL_DE_TU_REPOSITORIO] con la URL real de tu repositorio de GitHub.
    # Ejemplo: git clone [https://github.com/Aljulio/Formulario-parcial]
    Luego, navega a la carpeta principal del proyecto:
    ```bash
    cd NombreDeTuCarpetaClonada
    ```

2.  **Configurar e Iniciar el Backend:**
    Primero, navega a la carpeta del servidor:

    ```bash
    cd server
    ```
    Instala las dependencias de Node.js:

    ```bash
    npm install
    ```
    Inicia el servidor backend. **Mantén esta terminal abierta y el servidor en ejecución.**

    ```bash
    node index.js
    ```
    Verás un mensaje indicando que el servidor está escuchando en `http://localhost:5000`.

3.  **Configurar e Iniciar el Frontend:**
    Abre **una nueva terminal o ventana de comandos**. Navega de vuelta a la raíz del proyecto y luego a la carpeta del cliente:

    ```bash
    cd .. # Esto te lleva de la carpeta 'server' a la raíz del proyecto.
    cd client
    ```
    Instala las dependencias de React:

    ```bash
    npm install
    ```
    Inicia la aplicación frontend:

    ```bash
    npm start
    ```
    Esto abrirá automáticamente tu navegador en `http://localhost:3000` (o un puerto similar) donde podrás ver y usar el formulario.

