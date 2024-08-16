# 🛒Descripción del Proyecto

**ShopNow** es una tienda en línea especializada en accesorios para hombres. En ShopNow, podrás encontrar una variedad de productos como:

- Correas
- Relojes
- Sombreros
- Billeteras

Además, ShopNow cuenta con filtros que facilitan la búsqueda de los productos que estás buscando.

# 🛠️ Iniciar el Proyecto

  ## 🖥️ Abrir Terminales

  1. **Abre dos terminales**: Una para el backend y otra para el frontend.

  ## 🚀 Iniciar el Servidor Backend

  En la primera terminal, sigue estos pasos:

  1. Navega a la carpeta `back-Store`:
       ```bash
     cd StorePrueba/back-Store
   
  2. Ejecuta el servidor backend:
       ```bash
     npm run json

   ## 🌐 Iniciar el Servidor Frontend

  En la segunda terminal, sigue estos pasos:

  1. Navega a la carpeta `store`:
     ```bash
     cd StorePrueba/store

  2. Instala las dependencias:
   ```bash
   npm install

  3.Inicia el servidor frontend:**
   ```bash
   npm run dev

 # 🔧 Decisiones Técnicas

## 🗄️ Back-end

  Para el backend, opté por usar un archivo JSON como base de datos. Aproveché Axios, una biblioteca de JavaScript, para realizar solicitudes HTTP de manera rápida y eficiente.

## 🔍 Filtro

  Utilicé un único componente con diferentes props para personalizar las características individuales de cada filtro.

## 🌍 Contexto

  Implementé el Context de React para gestionar la información global, permitiendo que todos los componentes accedan fácilmente a los datos necesarios.

## 👨‍💻 Front-end

- **Inicialización**: Todo está configurado en el componente `App`.
- **Layout**: Se creó un layout para las cartas para asegurar un diseño consistente.
- **Estilos**: Todos los estilos están creados con Tailwind CSS.







    
