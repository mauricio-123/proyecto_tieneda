export function ampliarInformacionProducto(evento){

    let producto={}

    //lleno la informacion del producto
    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.nombre=evento.target.parentElement.querySelector("h4").textContent
    producto.descripcion=evento.target.parentElement.querySelector("p").textContent
    producto. rprecio=evento.target.parentElement.querySelector("h3").textContent

    let fotoInfo=document.getElementById("fotoInfo")
    fotoInfo.src=evento.target.parentElement.querySelector("img").src

    let tituloFoto=document.getElementById("nombreInfo")
    tituloFoto.textContent=evento.target.parentElement.querySelector("h4").textContent

    let descripcionInfo=document.getElementById("descripcionInfo")
    descripcionInfo.textContent=evento.target.parentElement.querySelector("p").textContent


    let rprecioinfo=document.getElementById("precioInfo")
    rprecioinfo.textContent=evento.target.parentElement.querySelector("h3").textContent

    //devolver el producto generado
    return producto

}