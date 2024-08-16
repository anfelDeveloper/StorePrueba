# 🛒Descripción del Proyecto

**ShopNow** es una tienda en línea especializada en accesorios para hombres. En ShopNow, podrás encontrar una variedad de productos como:

- Correas
- Relojes
- Sombreros
- Billeteras

Además, ShopNow cuenta con filtros que facilitan la búsqueda de los productos que deseas.

# 🛠️ Iniciar el Proyecto

  ## 🖥️ Abrir Terminales

  1. **Abre dos terminales**: Una para el backend y otra para el frontend.

  ## 🚀 Iniciar el Servidor Backend

En la primera terminal, sigue estos pasos:

1. Navega a la carpeta `back-Store`:
    ```bash
    cd StorePrueba/back-Store
    ```

2. Ejecuta el servidor backend:
    ```bash
    npm run json
    ```

## 🚀 Iniciar el Servidor Frontend

En la segunda terminal, sigue estos pasos:

1. Navega a la carpeta `store`:
    ```bash
    cd StorePrueba/store
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor frontend:
    ```bash
    npm run dev
    ```

# 🔧 Decisiones Técnicas

## 🗄️ Back-end

Para el backend, opté por usar un archivo JSON como base de datos. Aproveché Axios, una biblioteca de JavaScript, para realizar solicitudes HTTP de manera rápida y eficiente.

## 🔍 Filtro

Para gestionar los filtros en la aplicación, implementé un único componente que utiliza diferentes `props` para personalizar las características de cada filtro. Esta estrategia permite:

- **Reutilización del Código**: Al centralizar la lógica del filtro en un solo componente, se evita la duplicación de código.
- **Flexibilidad**: Los diferentes `props` permiten ajustar las características del filtro según sea necesario, haciendo el componente más versátil.
- **Mantenimiento Sencillo**: Al tener un solo componente para los filtros, es más fácil realizar cambios y mantener el código.

## 🌍 Contexto

Implementé el Context de React para gestionar la información global, permitiendo que todos los componentes accedan fácilmente a los datos necesarios.

## 👨‍💻 Front-end

- **Inicialización**: Todo está configurado en el componente `App`.
- **Layout**: Se creó un layout para las cartas para asegurar un diseño consistente.
- **Estilos**: Todos los estilos están creados con Tailwind CSS.
