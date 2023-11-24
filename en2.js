const pt = require("prompt-sync")({ sigint: true })

const nota = pt("¿Cual es tu nota? =>")

console.log("Tu nota es " + nota)
if (nota < 3) {
    console.log("Tu calificación es muy deficiente.");
} else if (nota >= 3 && nota < 5) {
    console.log("Tu calificación es insuficiente.");
} else if (nota >= 5 && nota < 6) {
    console.log("Tu calificación es suficiente.");
} else if (nota >= 6 && nota < 7) {
    console.log("Tu calificación es bien.");
} else if (nota >= 7 && nota < 9) {
    console.log("Tu calificación es notable.");
} else if (nota >= 9 && nota <= 10) {
    console.log("Tu calificación es sobresaliente.");
}  