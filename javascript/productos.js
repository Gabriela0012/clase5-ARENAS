class Producto {
  constructor(nombre, precio, talle) {
    this.nombre  = nombre.toUpperCase();
    this.precio  = parseFloat(precio);
    this.talle =  parseInt(talle);
    this.vendido = false;
  }
  
}

const Productos = [];
Productos.push(new Producto("mini gris", 1580, "40"));
Productos.push(new Producto("mini negro", 1500, "42"));
Productos.push(new Producto("short blanco", 1700, "44"));
Productos.push(new Producto("jean", 2500, "38"));

//declaración de variables globales

let descuento = (0.10);
let producto, cupon, precioUnidad, cantidad, volverAComprar;


// funciones
const precioTotal = function (precioUnidad, cantidad) {
  return (precioUnidad * cantidad)
}
const precioConDescuento = function (precioUnidad, descuento) {
  return ((precioUnidad * cantidad) - (precioUnidad * cantidad * descuento))
}


do {
  producto = prompt("Que producto desea?\n Descripción del producto: NOMBRE, PRECIO, TALLE.\n1. Mini gris, 1580, 40 \n2. Mini negro, 1500, 42 \n3. Short blanco, 1700, 44\n 4. jean, 2500, 38")
  while (producto != 1 && producto != 2 && producto != 3 && producto != 4);
  
  cantidad = parseInt(prompt("Cuántas unidades del producto desea?"));

  switch (producto){
    // busco el precio de cada producto
    case "1":
      Productos.forEach(object => {
        if (object.nombre === "MINI GRIS") {
            precioUnidad = object.precio;
            producto = object.nombre;
        }
      });
      
      break;
    
    case "2":
      Productos.forEach(object => {
        if (object.nombre === "MINI NEGRO") {
            precioUnidad = object.precio;
            producto = object.nombre;
        }
      });
      break;
    
    case "3":
      Productos.forEach(object => {
        if (object.nombre === "SHORT BLANCO") {
            precioUnidad = object.precio;
            producto = object.nombre;
        }
      });
      break;
    
    case "4":
      Productos.forEach(object => {
        if (object.nombre === "JEAN") {
            precioUnidad = object.precio;
            producto = object.nombre;
        }
      });
      break;
    
    default:
      console.log("No es una opción válida");
      break;
    
  }

  
  
  cupon = prompt("Ingrese su código para hacer el descuento, sino desea del escuento ingrese NO")
  if (cupon.toUpperCase() == "BIENVENIDO10"){

    alert("El total de su compra con el descuento es de $" + precioConDescuento(precioUnidad,descuento) + "\n"+ producto + " x " + cantidad + " unidades");
    
  } else {
    alert("El total de su compra sin descuento es de $" + precioTotal(precioUnidad, cantidad) + "\n"+ producto + " x " + cantidad + " unidades");
  }

  volverAComprar = prompt("Deseas volver a comprar? SI/NO")
} while (volverAComprar == "SI");
