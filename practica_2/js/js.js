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



}

class Baraja {
    #cartas = [];

    constructor() {
        this.#cartas = Baraja.#fillBaraja();
    }


    static #fillBaraja() {
        const arrayPalos = ["c", "d", "p", "t"];
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
}





