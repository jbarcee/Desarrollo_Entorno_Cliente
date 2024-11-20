class Ordenador {

    constructor(marca, modelo, ram = 4, capacidad = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
    }

    toString() {
        return `Ordenador [Marca: ${this.marca}, Modelo: ${this.modelo}, Memoria RAM: ${this.ram}GB, Capacidad: ${this.capacidad}GB, Pulgadas: ${this.pulgadas}]`;
    }
}
//PARAMETROS NOMBRADOS, en caso de no recibir ningun valor se define como predeterminado el valor que se les pasa como parametro
class Portatil extends Ordenador {
    constructor(marca, modelo, ram = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, ram, capacidad, pulgadas);
        this.autonomia = autonomia;
    }

    toString() {
        super.toString() + ` Autonomia: ${this.autonomia} horas.`
    }
}