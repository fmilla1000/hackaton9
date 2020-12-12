function areaTriangulo(base, altura) {
    total = (base * altura) / 2
    return total
}

let num1 = Number(prompt("Ingrese la base del triangulo: "))
let num2 = Number(prompt("Ingrese la altura del triangulo: "))

console.log("El area es: ", areaTriangulo(num1, num2))