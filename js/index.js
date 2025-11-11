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
    




