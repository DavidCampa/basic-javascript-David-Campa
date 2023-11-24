const input = require("prompt-sync")({ sigint: true })

let cancelar = false
let numInput
let num
let suma = 0

while (!cancelar) {
    numInput = input('Introduce un número --> ')

    if (Number(numInput)) {
        num = Number(numInput)
        suma += num
    } else if (numInput !== 'cancelar'){
        console.log('Introduce un número valido')
    } else{
        cancelar = true
    }

}

console.log('La suma es ' + suma)