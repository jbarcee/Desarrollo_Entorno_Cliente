const arrayPalos = ["c", "d", "p", "t"];
class Carta {
    #palo = null;
    #valor = null;

    //(?)
    darValor(palo, valor) {
        this.#palo = palo;
        this.#valor = valor;
    }

    toString() {
        return "Palo: " + this.#palo + " - Valor: " + this.#valor;
    }

    getPaloValor(){
        return this.#palo + this.#valor;
    }

    getPalo() {
        return this.#palo;
    }

    getValor() {
        return this.#valor;
    }


}

class Baraja {
    #cartas = [];

    constructor() {
        this.#cartas = Baraja.#fillBaraja();
    }


    static #fillBaraja() {
        let carta = null;
        let array = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 14; j++) {
                carta = new Carta;
                carta.darValor(arrayPalos[i], j);
                array.push(carta);
            }
        }
        return array;
    }

    barajar() {
        this.#cartas.sort(() => Math.random() - 0.3);
    }

    toString() {
        let string = "";
        this.#cartas.forEach((c) => {
            string += c.toString() + "\n";
        })
        return string;
    }

    getCartas() {
        return this.#cartas;
    }

    reparteCarta() {
       return this.#cartas.pop();
    }
}

class Jugador {
    #mano

    constructor() {
        this.#mano = [];
    }

    nuevaCarta(baraja) {
        let carta = baraja.reparteCarta();
        this.#mano.push(carta);
        return carta;
    }

    getMano() {
        return this.#mano;
    }
}

//INICIO DE LÓGICA
const PAREJA = 2;
const DOBLE_PAREJA = 4;
const TRIO = 3;
const FULL = 5;
const POKER = 6;
var baraja = new Baraja;
var player = new Jugador;
var numRepartidas = 0;

function cogerCarta() {
    baraja.barajar();
    let carta = player.nuevaCarta(baraja);
    document.getElementById(numRepartidas).setAttribute("src", "cartas/"+carta.getPaloValor()+".svg");
    numRepartidas++;
    
    if (player.getMano().length == 5) {
        document.getElementById("btn-cogerCarta").disabled = true;
        document.getElementById("btn-nuevaPartida").disabled = false;
        numRepartidas = 0;
        checkCombination(player.getMano());
        document.getElementById("resultado").style.display = "block";
    }
}
function reset() {
    baraja = new Baraja;
    player = new Jugador;

    let cartas = document.getElementsByClassName("carta");

    for (let c of cartas) {
        c.setAttribute("src", "cartas/dorso-rojo.svg");
    }
    document.getElementById("btn-cogerCarta").disabled = false;
    document.getElementById("btn-nuevaPartida").disabled = true;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
}

function checkCombination(cartas) {
    let values = cartas.map(carta => carta.getValor());
    let palos = cartas.map(carta => carta.getPalo());
    
    const esColor = new Set(palos).size === 1;
    const esEscalera = this.esEscalera(values);
    
    if (esColor && esEscalera) { 
        document.getElementById("resultado").innerHTML = "¡Escalera de color!";  
        return;
    };
    if (this.contarRepeticiones(values).includes(4)) {
        document.getElementById("resultado").innerHTML = "¡Póker!"; 
        return;
    } 
    if (this.contarRepeticiones(values).includes(3) && this.contarRepeticiones(values).includes(2)) {
        document.getElementById("resultado").innerHTML = "¡Full!"; 
        return;
    }
    if (esColor) {
        document.getElementById("resultado").innerHTML = "¡Color!";
        return;
    }
    if (esEscalera) {
        document.getElementById("resultado").innerHTML = "¡Escalera!";
        return;
    }
    if (this.contarRepeticiones(values).includes(3)) {
        document.getElementById("resultado").innerHTML = "¡Trío!";
        return;
    }
    if (this.contarRepeticiones(values).filter(x => x === 2).length === 2) {
        document.getElementById("resultado").innerHTML = "¡Doble pareja!";
        return;
    }
    if (this.contarRepeticiones(values).includes(2)) {
        document.getElementById("resultado").innerHTML = "¡Pareja!";
        return;
    }
    document.getElementById("resultado").innerHTML = "¡No tienes ninguna combinación en tu mano!";
}

function esEscalera(valores) {
    const ordenados = [...new Set(valores)].sort((a, b) => a - b);
    return ordenados.length === 5 && ordenados[4] - ordenados[0] === 4;
}

function contarRepeticiones(valores) {
    const conteo = {};
    for (let valor of valores) {
        conteo[valor] = (conteo[valor] || 0) + 1;
    }
    return Object.values(conteo);
}
    






