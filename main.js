//CARRITO VACíO ARRAY

let carrito = JSON.parse(localStorage.getItem('cart')) || [];

// FUNCIONES QUE CALCULAN LOS DESCUENTOS E INTERESES

function efectivo(monto) {
    monto = monto - (monto*0.2)
    return monto
}
function credito(monto) {
    monto = monto + (monto*0.1)
    return monto
}

// VARIABLES
let montoTotal = 0;
let contenedor = document.getElementById("cards");
let contenedorFiltrados = document.getElementById("filtrados");
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('cart-count')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonVaciar = document.getElementById('vaciar-carrito')


// DECLARACIÓN OBJETO PRODUCTO
class Producto {

    constructor(id, nombre, precio, url, tipo) {

        this.id = id;
        this.nombre =  nombre;
        this.precio = parseFloat(precio);
        this.url = url;
        this.tipo = tipo;
    }
    desplegarProducto() {

        contenedor.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-4" >
                <div class="card tarjetas__efecto" >
                    <img src="${this.url}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center" ">${this.nombre}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center fs-3 fw-bold">${this.precio}</li>
                    <li class="list-group-item text-success bg-success bg-opacity-25 text-center p-1 fw-bold">¡Llega mañana!</li>
                    <button id=${this.id} class="btn-morado align-items-center mx-2 my-2" type="button" dataValor="${this.precio}">Agregar<i class="bi bi-cart3 ms-2"></i>
                    </button>
                    <h6 class="text-center">producto N°: ${this.id}</h6>
                    </ul>
                </div>
            </div>
        `;
    }
    agregarEvento() {

        let botonComprar = document.getElementById(`${this.id}`)
        let productoFiltrado = productos.filter( item => item.id === this.id)
        botonComprar.addEventListener('click', () => agregarAlCarrito(productoFiltrado[0]))
    }

}

// // ARRAY DE PRODUCTOS 
const productos = [];

const  producto1 = new Producto(1,"Moto E20", 35000.00, "./recursos/productos/motorE20.png","celular");
const  producto2 = new Producto(2,"Moto E40", 40000.00, "./recursos/productos/motoE40.png","celular");
const  producto3 = new Producto(3,"Moto E32", 45000.00, "./recursos/productos/motoE32.png","celular");
const  producto4 = new Producto(4,"Moto G22", 50000.00, "./recursos/productos/motoG22.png","celular");
const  producto5 = new Producto(5,"Moto G32", 55000.00, "./recursos/productos/motoG32.png","celular");
const  producto6 = new Producto(6,"Moto G42", 60000.00, "./recursos/productos/motoG42.png","celular");
const  producto7 = new Producto(7,"Moto G52", 65000.00, "./recursos/productos/motoG52.png","celular");
const  producto8 = new Producto(8,"Moto G82", 70000.00, "./recursos/productos/motoG82.png","celular");
const  producto9 = new Producto(9,"Moto Edge30 Ultra", 75000.00, "./recursos/productos/motoEdge30ultra.png","celular");
const producto10 = new Producto(10,"Moto Edge30 Fusionse", 80000.00, "./recursos/productos/motoEdge30fusionSe.png","celular");
const producto11 = new Producto(11,"Moto Edge30 Fusion", 85000.00, "./recursos/productos/motoEdge30Fusion.png","celular");
const producto12 = new Producto(12,"Moto Edge30 Neo", 90000.00, "./recursos/productos/motoEdge30ultraNeo.png","celular");
const producto13 = new Producto(13,"Moto Edge30", 95000.00, "./recursos/productos/motoEdge30.png","celular");
const producto14 = new Producto(14,"Moto Earbuds 3-s", 3000.00, "./recursos/productos/MotorolaEarbuds3S.png","celular");
const producto15 = new Producto(15,"Moto Earbuds 105", 3500.00, "./recursos/productos/Motorola Earbuds 105.png","celular");
const producto16 = new Producto(16,"Auri Inalámbricos Moto XT220", 4000.00, "./recursos/productos/Auriculares Inalámbricos Moto XT220.png","auricular");
const producto17 = new Producto(17,"Auriculares Moto XT120", 45000.00, "./recursos/productos/Auriculares Moto XT120.png","auricular");
const producto18 = new Producto(18,"Auriculares Moto XT200", 5000.00, "./recursos/productos/Auriculares Moto XT200.png","auricular");
const producto19 = new Producto(19,"Auriculares Moto XT500+", 5500.00, "./recursos/productos/Auriculares Moto XT500+.webp","auricular");
const producto20 = new Producto(20,"Moto Buds 085", 6000.00, "./recursos/productos/Moto Buds 085.webp","auricular");
const producto21 = new Producto(21,"Moto Buds 250", 6500.00, "./recursos/productos/Moto Buds 250.png","auricular");
const producto22 = new Producto(22,"Funda Violeta", 2000.00, "./recursos/productos/Funda Protectora Premium Violeta.png","funda");
const producto23 = new Producto(23,"Funda Azul", 2000.00, "./recursos/productos/Funda Protectora Premium Azul.png","funda");
const producto24 = new Producto(24,"Funda 30 Fusion", 1500.00, "./recursos/productos/Funda Protectora - Edge 30 Fusion.png","funda");
const producto25 = new Producto(25,"Funda 30 Ultra", 1500.00, "./recursos/productos/Funda Protectora - Edge 30 Ultra.png","funda");


productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);
productos.push(producto16);
productos.push(producto17);
productos.push(producto18);
productos.push(producto19);
productos.push(producto20);
productos.push(producto21);
productos.push(producto22);
productos.push(producto23);
productos.push(producto24);
productos.push(producto25);



// DOM 
productos.forEach(item => item.desplegarProducto());

// EVENTO COMPRA
productos.forEach(item => item.agregarEvento());

//AGREGAR AL CARRITO
function agregarAlCarrito(producto) {
    // console.log(producto)
    Swal.fire({
        title: "Genial!",
        text: "Has agregado un producto nuevo al carrito!",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    carrito.push({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    });
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito));
    montoTotal += producto.precio;
    precioTotal.innerText = montoTotal;
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Id:<span id="cantidad">${prod.id}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class=" mb-3 bi bi-trash3"></i>
        </button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length 
}


// VACIAR CARRITO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    contenedorCarrito.innerHTML = ""
    precioTotal.innerText = 0
    cartCount.innerText = 0
    contenedorCarrito.innerHTML= `<div class= "m-5 fw-bold">CARRITO VACIADO<i class="ms-3 fs-3 fw-bold bi bi-cart-x"></i>
    </div>`
})

// ELIMINAR PRODUCTO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1)  
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Id:<span id="cantidad">${prod.id}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class=" mb-3 bi bi-trash3"></i>
        </button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length 

}


// MOSTRAR NUMERO EN CARRITO - CARRITO LENGTH

const cartCount = document.getElementById('cart-count');

// DECLARO OBJETO CLIENTE    
class Cliente {

    constructor(dni, nombre, apellido, direccion, correo) {
        this.dni =  dni
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
    }
    comprar() {
        let producto = prompt("Ingrese el NOMBRE del producto que desea comprar:\n 1) MotoE20  \n 2) MotoE32 \n 4) MotoE40 \n 5) MotoG22  \n 6) MotoG32 \n 7) MotoG42 \n 8) MotoG52 \n 9) MotoG82");
        productoComprar = producto.toLowerCase();
        let agregarCarrito = productos.filter((el)=> el.nombre.includes(productoComprar));
        precioComprar = parseInt(agregarCarrito.map((el)=> el.precio));
        carrito.push((precioComprar));
        return carrito
    }
    finalizarCompra() {
        const final = carrito.reduce((partialSum, a) => partialSum + a, 0);
        alert(`El precio total es: ${final}`);
        return final
    }
    enviarCorreo(){
        alert("Se le ha enviado la factura al correo "+ this.correo)
    }
}



