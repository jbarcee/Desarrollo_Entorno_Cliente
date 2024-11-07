class Carta {
    #palo;
    #valor;

    constructor(palo, valor) {
        this.#palo = palo;
        this.#valor = valor;
    }
    //(?)
    darValor(palo, valor) {
        this.#palo = palo;
        this.#valor = valor;
    }

    toString() {
        return "Palo: " + this.#palo + " - Valor: " + this.#valor;
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
                carta = new Carta(arrayPalos[i], j);
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
}

