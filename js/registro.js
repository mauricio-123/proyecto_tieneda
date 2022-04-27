import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById("registro")
let modalregistro = new bootstrap.Modal(document.getElementById('mendajeinformativo'))
let textomodal=document.getElementById("mendajeinformativo")
let formulario=document.getElementById("")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email1").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("exito en el registro")
    textomodal.textContent="Exito en el registro"
    modalregistro.show()
    formulario.reset()
    setTimeout(function(){
        modalregistro.hide()
    })
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("fallo"+errorMessage)
    // ..
    textomodal.textContent="Fallamos: "+ errorMessage
    modalregistro.show()
    setTimeout(function(){
        modalregistro.hide()
    })
    });

})