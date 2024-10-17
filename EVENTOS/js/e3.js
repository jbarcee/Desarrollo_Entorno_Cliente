//1)
//Obtengo el element con id titulo
let element = document.getElementById("titulo");
const COLOR = 'green';
//Le añado el event listener para que cuando pase por encima
element.addEventListener('click', function() {
    this.style.backgroundColor = COLOR;
});
//Le añado el event listener para que cuando salga del elemento tenga un background blanco
element.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white';
});

//2)
//Le añado un event listener al body para que cuando se mueva el raton el background sea rojo
document.body.addEventListener('mousemove', function() {
    this.style.backgroundColor = 'red';
});
//Le añado un event listener al body para que cuando salga el ratón vuelva a ser blanco el background
document.body.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'white';
});

//3)
//Obtengo todas las <img> del documento
let imgs = document.querySelectorAll("img");
//Con un bucle les añado varios event listener 

imgs.forEach(img => {
     //Permite añadir un div debajo de la imagen con la ruta de esta cuando el ratón pasa por encima
    img.addEventListener('mouseover', function() {
        this.parentElement.innerHTML += "<div>" + this.getAttribute("src") + "</div>";
    });
    img.addEventListener("click", function() {
        alert(`X: ${event.clientX} Y: ${event.clientY}`);
    });
});

/*for (i = 0; i < imgs.length; i++) {
    //Permite añadir un div debajo de la imagen con la ruta de esta
    imgs[i].addEventListener('mouseover', function() {
        this.parentElement.innerHTML += "<div>" + this.getAttribute("src") + "</div>";
    });
    //
    imgs[i].addEventListener("click", function() {
        alert("HOLA");
    });
}*/