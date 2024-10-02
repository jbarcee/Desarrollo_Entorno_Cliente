function generarPlanta() {
    let nombre = prompt("¿Nombre?", "Planta");
    let ubicacion = prompt("¿Ubicacion?", "Sitio");
    let ejemplares = prompt("¿Nº de ejemplares?", 0);
    let flor = prompt("¿Flor?", "Flor");

    let listaPlantas = document.getElementById("listaPlantas");
    listaPlantas.innerHTML += "<li class=planta>" + nombre + "<ul><li>Ubicación: " + ubicacion + "</li><li>Nº de ejemplares: " + ejemplares + "</li><li>Flor: " + flor + "</li></ul></li>";
}

function eliminarPlanta() {
    let elementosLista = document.getElementById("listaPlantas").getElementsByClassName("planta");
    elementosLista[elementosLista.length -1].remove();
}