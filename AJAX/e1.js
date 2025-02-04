document.querySelector("#btn").addEventListener('click', cambiarContenido);

async function cambiarContenido() {
    try {
        const response = await fetch('holaMundo.txt');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo');
        }
        const texto = await response.text();
        document.getElementById('contenido').innerHTML = texto;
    } catch (error) {
        alert(error);
    }
}
