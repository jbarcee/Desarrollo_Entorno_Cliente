function changeDisplay() {
    let state = this.previousElementSibling.style.display;
    if (state == 'none') {
        this.previousElementSibling.style.display = 'block';
        this.innerHTML = 'Ocultar contenido';
    }
    else {
        this.previousElementSibling.style.display = 'none';
        this.innerHTML = 'Mostrar contenido';
    }
}

function añadirListeners() {
    let lista = document.getElementsByTagName("a");
    for (i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", changeDisplay);
    }
}