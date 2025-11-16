let data = localStorage.getItem("miClave");
let info= JSON.parse(data);
let saludo = document.querySelector(".saludo");
let mensaje = document.querySelector(".mensaje");
let barra = document.querySelector(".barra");
if (info) {
  saludo.innerText = `Bienvenido ${info.email}`;
  mensaje.innerText = "Disfruta de la App."
  barra.innerHTML = ` <li> Bienvenido: ${info.email} </li>
                      <li class = "logout" ><a id="logout-link" href="./login.html"> Logout</a></li>`
}
else{
  alert("No se guardaron bien los datos");
}
