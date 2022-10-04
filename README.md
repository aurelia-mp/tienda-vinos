# Proyecto de E-Commerce con React

![](/public/img/demo-screenshot.png)

+ Este proyecto fue creado con React (https://reactjs.org/)
+ Funcionalidades:
    + Ver una lista de produtos, ordenados por categoría. Cada categoría cuenta con su ruta específica
    + Ingresar al detalle de cada producto: título, descripción, imagen, stock. Cada producto cuenta con su ruta específica
    + Agregar / eliminar / actualizar cantidad de cada producto en el carrito de compras
    + Formulario de compra con datos básicos del comprador
    + Generación de una orden de compra con ID único
    + Manejo de stock de cada producto. El stock se altera al confirmarse una orden de compra

##  Deploy del proyecto

- El proyecto está hosteado en GitHub Pages
- Para ver el proyecto funcionando, ingresar a: <https://aurelia-mp.github.io/tienda-vinos/>

## ¿Cómo levantar el proyecto localmente?

1. Clonar el repositorio: `git clone https://github.com/aurelia-mp/tienda-vinos.git`

2. Instalar el directorio node_modules con el comando `npm install`

3. Iniciar el proyecto con el comando `npm start`

## Librería utilizadas

1. [React Router DOM](https://reactrouter.com/en/main) : manejo de rutas y links internos
2. [Firebase](https://firebase.google.com/): se utilizó la base de datos NoSQL Cloud Firestore para almacenar los datos de productos y ordenes de compra


