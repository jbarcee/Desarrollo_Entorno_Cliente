let buscador = document.querySelector("#buscador");
document.querySelector("#btn").addEventListener('click', function () {
    let value = buscador.value;
    if (value === "") {
        document.querySelector('#contenido-ej3').innerHTML = "<h1 style=background-color:red;>INTRODUZCA UN TÉRMINO PARA BUSCAR ARTÍCULOS</h1>"
    }
    else {
        cargarDatos(`https://api.spaceflightnewsapi.net/v4/articles/?title_contains=${value}&limit=1`);
    }

});
async function cargarDatos(url) {
    let response = await fetch(url);
    let json = await response.json();
    document.querySelector('#contenido-ej3').innerHTML = "";

    let r = json.results[0];
    document.querySelector('#contenido-ej3').innerHTML += `<div><h1>${r.title}</h1><img width=300 src=${r.image_url}><p>${r.url}</p></div><button id="previous">ANTERIOR</button><button id="next">SIGUIENTE</button>`;

    document.querySelector("#next").addEventListener('click', function () {
        cargarDatos(json.next);
    });
    document.querySelector("#previous").addEventListener('click', function () {
        cargarDatos(json.previous);
    })
}