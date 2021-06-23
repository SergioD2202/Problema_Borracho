const Coordenadas = require("./coordenadas")

class Borracho {
    constructor(mov) {
        this.mov = mov
        this.pos = new Coordenadas(0, 0)
    }

    caminar() {

        let choice = Math.floor(Math.random() * 4) + 1

        switch (choice) {
            case 1:
                this.pos.derecha()
                break

            case 2:
                this.pos.izquierda()
                break

            case 3:
                this.pos.arriba()
                break

            case 4:
                this.pos.abajo()
                break

            default:
                this.pos.abajo()
        }

    }


    static distanciaOrigen(borracho) {
        return Math.abs(borracho.pos.x) + Math.abs(borracho.pos.y)
    }

    reset() {
        this.pos.x = 0
        this.pos.y = 0
    }
}

module.exports = Borracho