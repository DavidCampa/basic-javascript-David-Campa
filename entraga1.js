const pt = require("prompt-sync")({ sigint: true })

const edad = pt("¿Cual es tu edad? =>")

console.log("Tu edad es " + edad)

if (Number(edad) == edad) {
    if(edad >= 18) {
        console.log("Puedes votar");
    } else {
        console.log("No puedes votar");

    }
}