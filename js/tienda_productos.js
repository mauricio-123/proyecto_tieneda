let productosBd = [
    {foto: 'assets/img/c1.jpeg', nombre: "conjunto 1", precio: 40000},
    {foto: 'assets/img/c2.jpeg', nombre: "conjunto 2", precio: 50000},
    {foto: 'assets/img/c3.jpeg', nombre: "conjunto 3", precio: 60000},
    {foto: 'assets/img/c4.jpeg', nombre: "conjunto 4", precio: 70000},
    {foto: 'assets/img/b1.jpeg', nombre: "buso 1", precio: 50000},
    {foto: 'assets/img/b2.png', nombre: "buso 2", precio: 30000},
    {foto: 'assets/img/b3.jpeg', nombre: "buso 3", precio: 50000},
    {foto: 'assets/img/z1.jpeg', nombre: "zapatos 1", precio: 70000},
    {foto: 'assets/img/z2.jpeg', nombre: "zapatos 2", precio: 70000},
    {foto: 'assets/img/z3.jpeg', nombre: "zapatos 3", precio: 70000}
]
let fila=document.getElementById("fila")
productosBd.forEach(function(producto){
    console.log(producto.foto)
    console.log(producto.nombre)
    console.log(producto.precio)

    let columna=document.createElement("div")
    columna.classList.add("col")

    let targeta=document.createElement("div")
    targeta.classList.add("card")
    targeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    targeta.appendChild(foto)
    columna.appendChild(targeta)
    fila.appendChild(columna)
})
