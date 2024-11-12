class Punto {
    constructor(x, y){
        if (typeof x != 'number') {
            this.x = 0;
        }
        else {
            this.x = x;
        }
        
        if (typeof y != 'number') {
            this.y = 0;
        }
        else {
            this.y = y;
        }
    }

    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }

    cambiar(x, y) {
        this.x = x;
        this.y = y;
    }

    copia() {
        return new Punto(this.x, this.y);
    }

    suma(punto) {
        return new Punto(punto.x+ this.x, punto.y + this.y);
    }

    obtenerDistancia(punto) {
        return Math.sqrt(Math.pow(punto.x - this.x, 2) + Math.pow(punto.y - this.y,2));
    }
}