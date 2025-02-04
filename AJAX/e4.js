const URL = 'https://randomuser.me/api/';
let divContenido = document.querySelector("#contenido");

async function loadUsers() {
    divContenido.innerHTML = "<div style='display:flex; justify-content: center ;text-align: center;'><h1>Cargando usuarios...</h1></div>";
    let response = await fetch(URL + "?results=10");
    let jsonResponse = await response.json();
    divContenido.innerHTML = "";
    

    for (user of jsonResponse.results) {
        let component = createComponent(user.picture.large, `${user.name.title} ${user.name.first}`,user.name.last, user.email,  `${user.location.street.number} ${user.location.street.name}`, user.location.state, jsonResponse.results.indexOf(user));

        divContenido.innerHTML += component;
    }

}

function createComponent(foto, nombre, apellido, email, direccion, estado, id) {
    let color = id % 2 == 0 ? 'gray' : 'white';
    return `<div style='background-color: ${color}; text-align: center;'> <img src=${foto}> <p>${nombre}</p> <p>${apellido}</p> <p>${email}</p> <p>${direccion}</p> <p>${estado}</p>  </div>`
}
