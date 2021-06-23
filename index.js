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

function simulacion(pruebas) {
    let posFinal
    let favorables = 0

    for (let i = 1; i < pruebas; i++) {
        posFinal = experimento(10)

        if (Borracho.distanciaOrigen(posFinal) === 2) favorables++
    }

    let porcentaje = (favorables / pruebas) * 100

    console.log(`De ${pruebas} pruebas se han conseguido una probabilidad de ${porcentaje.toFixed(2)}% de casos favorables`)
}

simulacion(1000000)