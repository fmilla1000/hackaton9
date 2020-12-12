let i = new Number();
let aprobado = new Number();
let desaprobado = new Number();
aprobado = 0;
desaprobado = 0;

let n = Number(prompt("Ingrese la cantidad de alumnos"));

for (i = 1; i <= n; i++) {
    let nota = Number(prompt("Ingrese la nota del alumno", i));
    if (nota > 12) {
        aprobado = aprobado + 1;
    } else {
        desaprobado = desaprobado + 1;
    }
}

console.log("El numero de aprobados es: ", aprobado);
console.log("El numero de desaprobados es: ", desaprobado);