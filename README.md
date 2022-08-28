# CompuMundo HMR

CompuMundo HiperMegaRed es un simulador de eCommerce, una tienda de informática, especializada en venta de hardware

# Instalación Local

$ git clone https://github.com/MagaliAzimonti/compumundohmred.git

$ cd appcompumundohmr

$ npm install

$ npm start

# Routes

En App.js:

* La Ruta "/" muestra todos los productos de ItemListContainer y el mensaje "Todos nuestros productos".

* La Ruta "/detail/;productoId" muestra el ItemDetailContainer de cada producto ubicandolo mediante su "id", tras presionar el Link "Ver más".

* La Ruta "/category/:categoryId" muestra el mensaje "Productos filtrados" y a su vez, los productos filtrados al seleccionar las distintas categorias del Navbar, ubicandolos mediante el "category" de cada producto.

* La Ruta "*" determina que toda ruta no especificada a la cual se quiera acceder culmine en un "ERROR 404 NOT FOUND".

# Herramientas implementadas

* Create-React-App
* Bootstrap
