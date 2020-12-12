let d = new String();
let r = new Number();
let v = new Number();
let b = new Number();

do {
    let x = prompt("Ingrese el color del foco ( verde / rojo / blanco )");
    if (x == "verde") {
        v = v + 1;
    }
    if (x == "blanco") {
        b = b + 1;
    }
    if (x == "rojo") {
        r = r + 1;
    }
    console.log("¿Desea continuar? si/no");
    d = prompt();
} while (d != "no");

console.log("Hay ", v, " foco(s) verde(s)");
console.log("Hay ", b, " foco(s) blanco(s)");
console.log("Hay ", r, " foco(s) rojo(s)");