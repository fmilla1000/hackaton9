function areaRectangulo(a, b) {
    total = a * b
    return total
}

let num1 = Number(prompt("Ingrese el primer lado: "))
let num2 = Number(prompt("Ingrese el segundo lado: "))

console.log("El area es: ", areaRectangulo(num1, num2))