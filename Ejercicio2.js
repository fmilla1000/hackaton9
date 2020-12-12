function promedio(a, b, c, d) {
    total = (a + b + c + d) / 4
    return total
}

let num1 = Number(prompt("Ingrese la primera nota: "))
let num2 = Number(prompt("Ingrese la segunda nota: "))
let num3 = Number(prompt("Ingrese la tercera nota: "))
let num4 = Number(prompt("Ingrese la cuarta nota: "))

console.log("El promedio es: ", promedio(num1, num2, num3, num4))