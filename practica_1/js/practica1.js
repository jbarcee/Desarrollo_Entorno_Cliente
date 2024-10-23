var numSerieVerified = false;
var termsAccepted = false;
const ID_ERROR_NUMSERIE = "errorNumSerie";
const ID_ERROR_TERMS = "errorTerms";



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
textNumSerie.addEventListener("input", function(event) {
    let textValue = textNumSerie.value;
    let regEx = /^\d{3}[A-Z]{4}[12A]$/;

    
    if (textValue == "" || !regEx.test(textValue)) {
        numSerieVerified = false;
        textNumSerie.style.borderColor = "red";
        textNumSerie.style.color = "white";
        textNumSerie.style.backgroundColor = "red";
        textNumSerie.previousElementSibling.style.color = "red";
        //document.getElementById("error").innerHTML="<strong>* El numero de serie tiene que cumplir estas características:<br><ul><li>Debe empezar por 3 numeros</li><li>Debe seguir con 4 letras mayúsculas</li><li>Debe acabar con 1, 2 o A mayuscula</li></ul></strong>"
        let errorMsg = "<strong>* El numero de serie tiene que cumplir estas características:<br><ul><li>Debe empezar por 3 numeros</li><li>Debe seguir con 4 letras mayúsculas</li><li>Debe acabar con 1, 2 o A mayuscula</li></ul></strong>";
        createErrorParagraph(errorMsg, ID_ERROR_NUMSERIE);
    }
    else {
        numSerieVerified = true;
        textNumSerie.style.borderColor = "black";
        textNumSerie.style.color = "black";
        textNumSerie.style.backgroundColor = "white";
        textNumSerie.previousElementSibling.style.color = "black";
        //document.getElementById("error").innerHTML="";
        document.getElementById(ID_ERROR_NUMSERIE).remove();
    }

    if (numSerieVerified && termsAccepted) {
        document.getElementById("sub").disabled=false;
    }
    else {
        document.getElementById("sub").disabled=true;
    }
});
//Añade un listener para que cuando se haga click en el cuadro de texto tanto el value como el style se reinicien
textNumSerie.addEventListener("click", function(){
        textNumSerie.style.borderColor = "black";
        textNumSerie.style.color = "black";
        textNumSerie.style.backgroundColor = "white";
        textNumSerie.previousElementSibling.style.color = "black";
        textNumSerie.value = "";
        document.getElementById(ID_ERROR_NUMSERIE).remove();
});
//---------------------------
//Checkea que el checkbox esta marcado 
let checkBox = document.getElementById("termsCheckBox");
checkBox.addEventListener("change", function() {
    if (!this.checked) {
        termsAccepted = false;
        let errorMsg = "<strong>Debe aceptar las condiciones de servicio.</strong>";
        createErrorParagraph(errorMsg, ID_ERROR_TERMS);
        document.getElementById("lblTerms").style.color = "red";
    }
    else {
        termsAccepted = true;
        if (document.getElementById(ID_ERROR_TERMS) != null) {
            document.getElementById(ID_ERROR_TERMS).remove();
        }
        document.getElementById("lblTerms").style.color = "black";
    }

    if (numSerieVerified && termsAccepted) {
        document.getElementById("sub").disabled=false;
    }
    else {
        document.getElementById("sub").disabled=true;
    }
});

function createErrorParagraph(message, id) {
    //Si este parrafo aun no existe lo crea, sino no.
    //Esto evita que por cada input que haga el usuario se cree un parrafo
    if (document.getElementById(id) == null) {
        let p = document.createElement("p");
        p.innerHTML = message;
        p.setAttribute("id", id);
        //Metodo comentado ya que el CSS se encargará de dar estilo a los parrafos
        //setErrorParagraphStyle(p);
        document.getElementById("divForm").after(p);
    }
}

//En el caso de no quererlo hacerlo por medio de CSS, esta sería la forma de dar estilo al parrafo de error
/*function setErrorParagraphStyle(p) {
    p.style.paddingLeft = "10px";
    p.style.fontFamily = "monospace";
    p.style.fontSize = "15px";
    p.style.marginTop = "3%";
    p.style.marginLeft = "25%";
    p.style.marginRight = "50%";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "red";
    p.style.color = "white";
    p.style.borderColor = "white";
}*/

function showTextArea() {
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