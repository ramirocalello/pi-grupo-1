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



    .catch(function (error) {
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
    .catch(function (error) {
        console.log("error" + error);
    })

let query = new URLSearchParams(location.search);
let termino = query.get("buscador");
let resultado = document.querySelector(".aleatorios");
let vacio= document.querySelector(".search");
let contenedor = document.querySelector(".productosRandom");


resultado.innerHTML = `Resultados de búsqueda para: <br> ${termino}`;

let urlSearch = `https://dummyjson.com/products/search?q=${termino}`;


fetch(urlSearch)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        
        let productos = data.products
        let infoSearch = "";

        if (productos.length == 0) {
            vacio.innerText = `No hay resultados para el término: ${termino}`;
            contenedor.innerHTML = "";
            return
        }

        vacio.innerText = ""; 

        for (let i = 0; i < productos.length; i++) {
            const p = productos[i];

            infoSearch += `<article class="producto">
                    <a href="./product.html?id=${p.id}">
                        <img class="fotos" src="${p.images[0]}" alt="">
                    </a>
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <h4>${p.price}</h4>
                    <a class="detalle" href="./product.html?id=${p.id}">Ver detalle</a>
                </article>`
        }

        contenedor.innerHTML = infoSearch;
    })
    .catch(function (error) {
        console.log("error" + error);
    })