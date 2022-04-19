let productosBd = [
    {foto: 'assets/img/c1.jpeg', nombre: "conjunto azul de dama", precio: 40000, botcompra:"Comprar" },
    {foto: 'assets/img/c2.jpeg', nombre: "conjunto rozado de dama", precio: 50000, botcompra:"Comprar"},
    {foto: 'assets/img/c3.jpeg', nombre: "conjunto blanco de algodon", precio: 60000,botcompra:"Comprar"},
    {foto: 'assets/img/c4.jpeg', nombre: "conjunto azul de capucha", precio: 70000,botcompra:"Comprar"},
    {foto: 'assets/img/b1.jpeg', nombre: "buso azul", precio: 50000,botcompra:"Comprar"},
    {foto: 'assets/img/b2.png', nombre: "buso gris", precio: 30000,botcompra:"Comprar"},
    {foto: 'assets/img/b3.jpeg', nombre: "zapatos blancos", precio: 50000,botcompra:"Comprar"},
    {foto: 'assets/img/z1.jpeg', nombre: "zapatos negro", precio: 70000,botcompra:"Comprar"},
    {foto: 'assets/img/z2.jpeg', nombre: "zapatos de tela negro", precio: 70000,botcompra:"Comprar"},
    {foto: 'assets/img/z3.jpeg', nombre: "zapatos negro", precio: 70000,botcompra:"Comprar"}
]
let fila=document.getElementById("fila")
productosBd.forEach(function(producto){
    console.log(producto.foto)
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.botcompra)
    

    let columna=document.createElement("div")
    columna.classList.add("col")

    let targeta=document.createElement("div")
    targeta.classList.add("card")
    targeta.classList.add("h-100")

    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let presio=document.createElement("h5")
    presio.classList.add("text-center")
    presio.textContent=producto.precio
    /*
    let compra=document.createElement("div")
    compra.classList.add("btn btn-primary active")
    presio.textContent=producto.botcompra
    */

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    targeta.appendChild(titulo)
    targeta.appendChild(foto)
    targeta.appendChild(presio)
    targeta.appendChild(compra)
    columna.appendChild(targeta)
    fila.appendChild(columna)
})
