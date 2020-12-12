function areaCirculo(radio) {
    const pi = 3.14
    total = radio ** 2 * pi
    return total
}

let num1 = Number(prompt("Ingrese el radio del circulo: "))

console.log("El area del circulo es: ", areaCirculo(num1))