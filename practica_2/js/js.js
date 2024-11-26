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
        //TEST
        if (paloDado < 4) {
            carta.darValor(arrayPalos[paloDado], 2);
        }
        else {
            paloDado = 0;
        }
        

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
//TEST
var paloDado = 0;

function cogerCarta() {
    //baraja.barajar();
    let carta = player.nuevaCarta(baraja);
    document.getElementById(numRepartidas).setAttribute("src", "cartas/"+carta.getPaloValor()+".svg");
    numRepartidas++;
    //TEST
    paloDado++;
    if (player.getMano().length == 5) {
        document.getElementById("btn-cogerCarta").disabled = true;
        document.getElementById("btn-nuevaPartida").disabled = false;
        numRepartidas = 0;
        checkCombination(player.getMano());
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
    document.getElementById("resultado").innerHTML = "";
}

function checkCombination(cartas) {
    
    if (checkColor(cartas)) {
        document.getElementById("resultado").innerHTML = "¡COLOR!"
    }
    else if (checkIguales(cartas) !== 0) {
        switch(checkIguales(cartas)) {
            case PAREJA:
                document.getElementById('resultado').innerHTML = "PAREJA";
                break;
            case TRIO:
                document.getElementById('resultado').innerHTML = "TRIO";
                break;
            case DOBLE_PAREJA:
                document.getElementById('resultado').innerHTML = "DOBLE PAREJA";
                break;
            case FULL:
                document.getElementById('resultado').innerHTML = "FULL";
                break;
            case POKER:
                document.getElementById('resultado').innerHTML = "POKER";
                break;
            default:
                break;
        }
    }
    else {
        document.getElementById("resultado").innerHTML = "Ninguna combinacion."
    }
}

function checkColor(cartas) {
    return cartas.every(c => c.getPalo() == "d") || cartas.every(c => c.getPalo() == "t") || cartas.every(c => c.getPalo() == "c") || cartas.every(c => c.getPalo() == "p");
}

function checkIguales(cartas) {
    let numParejas = 0;
    let initialSize = cartas.length;
    for (let i = 1; i < 14; i++) {
        let cloneCartas = new Array(...cartas);
        cloneCartas = cloneCartas.filter((j) => { return j.getValor() !== i });
        if (cloneCartas.length === initialSize - TRIO) {
            if (checkIguales(cloneCartas) == PAREJA) {
                numParejas = FULL;
            }
            else {
                numParejas = TRIO;
            }
        }
        else if (cloneCartas.length === initialSize - PAREJA) {
            if (checkIguales(cloneCartas) == PAREJA) {
                if (cloneCartas.filter((j) => { return j.getPalo() !== cloneCartas[0].getPalo()}).length === 1 && cloneCartas.every((j) => { return j.getValor() === cloneCartas[0].getValor()})) { 
                    numParejas = POKER;
                }
                else {
                    numParejas = DOBLE_PAREJA;
                }
            }
            else {
                numParejas = PAREJA;
            }
            
        }   
    }
    return numParejas;
    
}





