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

let queryString = location.search
let queryStringID = new URLSearchParams(queryString);
let qID = queryStringID.get("id")
let url_product = `https://dummyjson.com/products/${qID}` 
let nombre = document.querySelector(".nombre") 
let marca = document.querySelector(".marca")
let descripcion = document.querySelector(".descripcion")
let precio = document.querySelector(".precio")
let categoriaJS = document.querySelector(".categoriaJS")
let stock = document.querySelector(".stock")
let img = document.querySelector(".imgproduct")
let tags = document.querySelector(".tags")


fetch(url_product)
    .then(function (response) {
       return response.json()
    })
    .then(function (data) {
      console.log(data)
      console.log(data.category)
      let categorias2 = data.category
      let link = ""
      for (let i = 0; i < 1; i++) {
        const element = categorias2[i]; 
        console.log(element.category)
        link += `<a  href="category.html">Categoria: ${data.category}</a>`
      }

      nombre.innerText = data.title;
      marca.innerText = `Marca: ${data.brand}`;
      descripcion.innerText = data.description;
      precio.innerText = `Precio: ${data.price}`;
      categoriaJS.innerHTML = link
      stock.innerText = `Stock: ${data.stock}`
      img.src = data.images[0];
      tags.innerText = `Tags: ${data.tags}`;
      
    })
    .catch(function(error){
        console.log("error" + error);
    }) 

    let barrita = document.querySelector(".barrita")
    let urlSearch='https://dummyjson.com/products'
    let titulo= document.querySelector(".aleatorios")
    let search= document.querySelector(".search")
    let random= document.querySelector(".productosRandom")
   
   if (qID){
    titulo.innerText= `Resultados de busqueda sobre: <br> ${busqueda}`

   }
   else{
    titulo.innerText = `No se proporcionó un término de búsqueda.`
   }

    fetch(urlSearch)
    .then(function (response) {
       return response.json()
    })
    .then(function (data) {
        console.log(data)
        let productos= data.products
        let resultado= ""
        let busqueda= barrita.value
        
        
        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];
            
        
            if (barrita.value == element){
                 resultado+= `<article class="producto">
                    <a href="./product.html?id=${element.id}"><img class="fotos" src=${element.images[0]} alt=""></a>
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                    <h4>${element.price}</h4>
                    <a class="detalle" href="./product.html?id=${element.id}">Ver detalle</a>
                </article>`
                titulo.innerText += `<h2 class="aleatorios">Resultados de busqueda sobre: <br> ${busqueda}</h2>`
                search.innerText= ""

            }
            random.innerHTML= resultado
            
        }
      
    })
    .catch(function(error){
        console.log("error" + error);
    }) 