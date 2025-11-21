const form = document.querySelector(".formulario");
const input = document.querySelector("#barrita")
let barraFeedback = document.querySelector(".invalid-feedback-barra")

form.addEventListener("submit", function(e){
    e.preventDefault();
    let nombre = input.value.length;

    if (input.value.length == 0){
        barraFeedback.innerText = "No hay datos en este campo"
    }else if (input.value.length < 3){
        barraFeedback.innerText = "El campo debe tener al menos tres carácteres"
    }else{
        form.submit()
    }

})

barraFeedback.style.color = "red"

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

let mail= document.querySelector("#email")
let contra= document.querySelector("#password")
let feedmail= document.querySelector(".invalid-feedback.email")
let feedcontra= document.querySelector(".invalid-feedback.password")
let formulario= document.querySelector(".formLogin")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    if (mail.value == ""){
        feedmail.style.display= "inline"
        feedmail.innerText= "No hay datos en este campo"
        return false

    }
    if (contra.value == ""){
        feedcontra.style.display= "inline"
        feedcontra.innerText= "No hay datos en este campo"
        return false
    }
    else if(contra.value.length <= 6){
        feedcontra.style.display= "inline"
        feedcontra.innerText= "Debe tener mas de 6 caracteres"
        return false
        
    }
    
    let user= {
        email: this.email.value,
        user: this.user.value
    }
    let userString = JSON.stringify(user);

    localStorage.setItem("miClave", userString);
    
    this.submit()

})
feedcontra.style.color= "red"
feedmail.style.color= "red"



