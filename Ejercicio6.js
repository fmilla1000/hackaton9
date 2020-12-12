function sueldo(pagoporhora, horastrabajadas) {
    total = pagoporhora * horastrabajadas
    return total
}

let num1 = Number(prompt("Ingrese el pago por hora: "))
let num2 = Number(prompt("Ingrese la cantidad de horas trabajadas: "))

console.log("El sueldo semanal es: ", sueldo(num1, num2))