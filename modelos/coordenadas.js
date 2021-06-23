

class Coordenadas {

    constructor(x, y) {
        this.x = x

        this.y = y
    }

    derecha() {
        this.x++
    }

    izquierda() {
        this.x--
    }

    arriba() {
        this.y++
    }

    abajo() {
        this.y--
    }

}

module.exports = Coordenadas