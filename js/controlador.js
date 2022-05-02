//traer el archivo de tienda producto 
import {llenarTienda} from './tienda_productos.js'
//traer el archivo de ampliar informacion 
import {ampliarInformacionProducto} from './ampliarinfo.js'



//creo un producto vacio
let producto={}
//llamando a tienda llenado
llenarTienda()
//referencia al modal 
let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rutina para añadir un producto al carrito de compras
let carrito=[]
let botonAgrgarCarrito=document.getElementById("botonadd")
botonAgrgarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregarla al producto
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

   
    //Agrego el producto al carrito
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    let capsula=document.getElementById("capsula") 
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide()


})

//rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")

})



//rutina para ver el carrito
let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    

    base.innerHTML=""

    carrito.forEach(function(producto){

       
     

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-7")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let descripcion=document.createElement("div")
        descripcion.classList.add("text-center")
        descripcion.textContent="precio unidad"

        let rdescripcion=document.createElement("div")
        rdescripcion.classList.add("text-center")
        rdescripcion.textContent="precio en dolares"


       let titulo=document.createElement("h4")
        titulo.classList.add("text-center","card-body")
        titulo.textContent=producto.nombre
        
        //estilo del precio
        let precio=document.createElement("h4")
        precio.classList.add("text-center","card-body")
        precio.textContent=producto.rprecio+" cop"

       
        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(titulo)
        columna2.appendChild(descripcion)
        columna1.appendChild(rdescripcion)
        columna2.appendChild(precio)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })



    modalcompra.show()

})


