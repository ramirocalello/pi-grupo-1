let barra = document.querySelector(".barra")
let mensaje = document.querySelector(".mensaje")
let logout = document.querySelector("#logout-link")
let saludo = document.querySelector(".saludo")

if (logout){
    logout.addEventListener("click",function(e){
    e.preventDefault()
    localStorage.clear()

    if (saludo) {
        saludo.innerText= ""
    }
    if (mensaje){
        mensaje.innerText = ""
    }
    if(barra){
         barra.innerHTML = `<li class="cuenta"><a class="cuentaDos" href="./login.html">LOGIN</a></li>
            <li class="cuenta"><a class="cuentaDos" href="./register.html">REGISTER</a></li>`
    }
   
            
})
}