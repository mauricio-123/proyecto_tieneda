export function llenarTienda(){

let productosBd = [
    {foto: 'assets/img/c1.jpeg', nombre: "conjunto negro", precio: 40000,descripcion:"conjunto de mujer en camisa negro en todos las tallas "},
    {foto: 'assets/img/c2.jpeg', nombre: "conjunto rosado", precio: 50000,descripcion:"conjunto de mujer  en camisa rosado en todos las tallas "},
    {foto: 'assets/img/c3.jpeg', nombre: "conjunto blanco", precio: 60000,descripcion:"conjunto de mujer con buso  blanco todos las tallas "},
    {foto: 'assets/img/c4.jpeg', nombre: "conjunto desajustado", precio: 70000,descripcion:"conjunto de mujer desajustado y con buso todos las tallas "},
    {foto: 'assets/img/b1.jpeg', nombre: "buso caralibre", precio: 50000,descripcion:"buso de cara graciosa "},
    {foto: 'assets/img/b2.png', nombre: "buso senciso", precio: 30000,descripcion:"buso clasico de cremallera"},
    {foto: 'assets/img/b3.jpeg', nombre: "tenis blanco", precio: 50000,descripcion:"zapato de color blancoy pasta azul con cordones desajustados "},
    {foto: 'assets/img/z1.jpeg', nombre: "zapatos de tela", precio: 70000,descripcion:"tenis de tela con plantilla blanca en color negro pintado "},
    {foto: 'assets/img/z2.jpeg', nombre: "zapatos en capuchino", precio: 70000,descripcion:"calzado en gris con plantilla blanca "},
    {foto: 'assets/img/z3.jpeg', nombre: "zapatos ", precio: 70000,descripcion:"zapato sensillo en color negro "}
]
 //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
        let fila=document.getElementById("fila")
        productosBd.forEach(function(producto){
  

     //2. pintando etiquetas

      //div con la clase col
        let columna=document.createElement("div")
         columna.classList.add("col")

    //div con las clases card h-100
    let targeta=document.createElement("div")
    targeta.classList.add("card")
    targeta.classList.add("h-100")

     //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top","h-50","p-1")
    foto.src=producto.foto

    //estilo del nombre
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center","card-body")
    titulo.textContent=producto.nombre

    //estilo del precio
    let rprecio=document.createElement("h3")
    rprecio.classList.add("text-center")
    rprecio.textContent=producto.precio + " cop"

    //estilo de la descripcion
    let rdescripcion=document.createElement("p")
    rdescripcion.classList.add("text-center","m-3")
    rdescripcion.textContent=producto.descripcion

    //creando un boton
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","m-2","bg-info")
    boton.textContent="ver producto"


    
    //3. PADRES E HIJOS
    targeta.appendChild(titulo)
    targeta.appendChild(foto)
    targeta.appendChild(rdescripcion)
    targeta.appendChild(boton)
    targeta.appendChild(rprecio)

    columna.appendChild(targeta)
    fila.appendChild(columna)
})
}
