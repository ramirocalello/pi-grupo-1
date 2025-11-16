const form = document.querySelector(".formulario");
const input = document.querySelector("#barrita")

form.addEventListener("submit", function(e){
    e.preventDefault();
    let nombre = input.value.length;

    if (input.value.length == 0){
        alert("el campo de busqueda está vacio")
    }else if (input.value.length <= 3){
        alert("el campo debe tener al menos tres caracteres")
    }else{
        form.submit()
    }

})

let categorias = document.querySelector(".listaLarga")
let url_category = `https://dummyjson.com/products/category-list`
fetch(url_category)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
      console.log(data);
      let contenido = ""
       
      
      for (let i = 0; i < data.length; i++) {
        const categoria = data[i];

        console.log(categoria);
        contenido += `<li class="listaCategoria"><a class="textoCategoria" href="category.html">${categoria}</a></li>`
        
    }

    categorias.innerHTML = contenido
    })
    


    .catch(function(error){
        console.log("error" + error);
    })


let mailUsu = document.querySelector("#email")
let contraUsu = document.querySelector("#password")
let reContra = document.querySelector("#passwordRe")
let feedbackMail = document.querySelector(".invalid-feedback.email")
let feedbackContra = document.querySelector(".invalid-feedback.password")
let feedbackReContra = document.querySelector(".invalid-feedback.rePassword")
let formulario = document.querySelector(".formLogin")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    if (mailUsu.value == ""){
       feedbackMail.style.display = "inline"
       feedbackMail.innerText = "Pon datos en este campo"
       return false;
    }
    if (contraUsu.value == ""){
        feedbackContra.style.display = "inline"
        feedbackContra.innerText = "Pon datos en este campo"
        return false;
    }
    if (contraUsu.value.length < 6){
        feedbackContra.style.display = "inline"
        feedbackContra.innerText = "La contraseña debe tener 6 caracteres por lo menos"
        return false;
    }
    if (reContra.value != contraUsu.value){
        feedbackReContra.style.display = "inline"
        feedbackReContra.innerText = "Este campo debe ser igual que la contraseña"
        return false;
    }

    formulario.submit();

})
feedbackMail.style.color = "red"
feedbackContra.style.color = "red"
feedbackReContra.style.color = "red"