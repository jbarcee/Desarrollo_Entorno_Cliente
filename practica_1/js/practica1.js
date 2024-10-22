var numSerieVerified = false;
var termsAccepted = false;

//Añade un listener al select para qye cambie la imagen 
let select = document.getElementById("selectIncidencia");
select.addEventListener("change", function() {
    //Obtiene el vector options y el valor de la selección del usuario y crea la ruta a la imagen como string
    let imgSrc = "img/" + this.options[this.selectedIndex].value + ".png";
    //Cambia el atributo src a la ruta especificada
    document.getElementById("imgTipoIncidencia").setAttribute("src", imgSrc);
})
//-----------------------

//Añade un listener al campo de texto de numero de serie para verificar que se introduce un valor correcto
let textNumSerie = document.getElementById("textNumSerie");
textNumSerie.addEventListener("input", function() {
    let textValue = textNumSerie.value;
    let regEx = /^\d{3}[A-Z]{4}[12A]$/;
    if (textValue == "" || !regEx.test(textValue)) {
        numSerieVerified = false;
        textNumSerie.style.borderColor = "red";
        textNumSerie.style.color = "white";
        textNumSerie.style.backgroundColor = "red";
        textNumSerie.previousElementSibling.style.color = "red";
        document.getElementById("error").innerHTML="<strong>* El numero de serie tiene que cumplir estas características:<br><ul><li>Debe empezar por 3 numeros</li><li>Debe seguir con 4 letras mayúsculas</li><li>Debe acabar con 1, 2 o A mayuscula</li></ul></strong>"
    }
    else {
        numSerieVerified = true;
        textNumSerie.style.borderColor = "black";
        textNumSerie.style.color = "black";
        textNumSerie.style.backgroundColor = "white";
        textNumSerie.previousElementSibling.style.color = "black";
        document.getElementById("error").innerHTML="";
    }

    if (numSerieVerified && termsAccepted) {
        document.getElementById("sub").disabled=false;
    }
    else {
        document.getElementById("sub").disabled=true;
    }
})
//---------------------------

let checkBox = document.getElementById("termsCheckBox");
checkBox.addEventListener("change", function() {
    if (this.checked) {
        termsAccepted = true;
    }
    else {
        termsAccepted = false;
    }

    if (numSerieVerified && termsAccepted) {
        document.getElementById("sub").disabled=false;
    }
    else {
        document.getElementById("sub").disabled=true;
    }
})


function enableTextArea() {
    let textAreaBtn = document.getElementById("textAreaButton");
    let sibling = textAreaBtn.previousElementSibling;

    //eliminar botón mostrar descripcion
    sibling.nextElementSibling.remove();

    //crear el text area a partir del sibling
    let textArea = document.createElement("textarea");
    textArea.setAttribute("cols", 45);
    textArea.setAttribute("rows", 10);
    sibling.after(textArea);
    
    //crea la label "Descripcion" encima de la textarea
    let label = document.createElement("label");
    label.innerHTML = "Descripción<br>";
    sibling.after(label);
}