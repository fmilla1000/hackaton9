function conversion(soles) {
    dolares = soles * 0.28
    return dolares
}

let num1 = Number(prompt("Ingrese la cantidad en soles: "))

console.log("Eso equivale a ", conversion(num1), " dolares")