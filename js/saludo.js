let data = localStorage.getItem("miClave");
let info = JSON.parse(data);
let saludo = document.querySelector(".saludo");
let mensaje = document.querySelector(".mensaje");
let barra = document.querySelector(".barra");

if (barra) {

  if (info) {
    if (saludo) {
      saludo.innerText = "Bienvenido: " + info.email;
    }

    if (mensaje) {
      mensaje.innerText = "Disfruta de la App.";
    }

    barra.innerHTML = `
            <li class="cuenta">Bienvenido: ${info.email}</li>
            <li class="logout"><a id="logout-link" href="#">Logout</a></li>
        `;
  }

  else {
    if (saludo) {
      saludo.innerText = "";
    }

    if (mensaje) {
      mensaje.innerText = "";
    }

    barra.innerHTML = `
            <li class="cuenta"><a class="cuentaDos" href="./login.html">LOGIN</a></li>
            <li class="cuenta"><a class="cuentaDos" href="./register.html">REGISTER</a></li>`;
  }
}