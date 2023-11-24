const pt = require("prompt-sync")({ sigint: true });

var cadenas = [];

while (true) {
    var input = pt("Introduce el texto --> ")

    if (input.toLowerCase() === 'cancelar') {
        break;
    }

    cadenas.push(input);
}

var resultado = cadenas.join('-');

console.log("Texto concatenado: " + resultado);