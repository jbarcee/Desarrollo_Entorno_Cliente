document.querySelector("#btn").addEventListener('click', mostrarTabla);

async function mostrarTabla() {
    let response = await fetch('prueba.json');
    responseJson = await response.json();
    document.querySelector('#contenido-ej2').innerHTML = "";
    document.querySelector('#contenido-ej2').innerHTML += '<tr><th>userId</th><th>id</th><th>title</th><th>completed</th></tr>';
    
    for (e of responseJson) {
        document.querySelector('#contenido-ej2').innerHTML += `<tr><td>${e.userId}</td><td>${e.id}</td><td>${e.title}</td><td>${e.completed}</td></tr>`
    }
}