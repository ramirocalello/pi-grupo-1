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