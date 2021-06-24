const Coordenadas = require("./modelos/coordenadas")
const Borracho = require("./modelos/borracho")

function experimento(m) {
    const sujeto = new Borracho(m)
    let moves = sujeto.mov
    while (moves > 0) {
        sujeto.caminar()
        moves--
    }
    return sujeto
}

function testBorracho(m){
    const sujeto = new Borracho(m)
    let moves = sujeto.mov
    const track = {"moves":moves, "list_moves":[]}

    track.list_moves.push(Object.assign({},sujeto.pos))

    while (moves > 0) {
        sujeto.caminar()
        track.list_moves.push(Object.assign({},sujeto.pos))
        moves--
    }
    return track
}

function simulacion(pruebas) {
    let posFinal
    let favorables = 0

    for (let i = 1; i < pruebas; i++) {
        posFinal = experimento(10)

        if (Borracho.distanciaOrigen(posFinal) === 2) favorables++
    }

    let porcentaje = (favorables / pruebas) * 100

    return {"pruebas":pruebas,"probabilidad":Number(porcentaje.toFixed(2))}
}

module.exports = {simulacion, testBorracho}