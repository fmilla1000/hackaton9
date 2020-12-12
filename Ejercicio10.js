let n1 = prompt("Ingresa el nombre de la primera persona")
let e1 = Number(prompt("Ingresa la edad de la primera persona"))
let n2 = prompt("Ingresa el nombre de la segunda persona")
let e2 = Number(prompt("Ingresa la edad de la segunda persona"))
let n3 = prompt("Ingresa el nombre de la tercera persona")
let e3 = Number(prompt("Ingresa la edad de la tercera persona"))
let r = Number();

if (e1 < e2) {
    r = e1;
} else {
    r = e1;
}
if (r < e3) {
    switch (r) {
        case e1:
            console.log("El/ La menor es: ", n1);
            break;
        case e2:
            console.log("El/ La menor es: ", n2);
            break;
    }
} else {
    console.log("El/ La menor es: ");
    console.log(n3);
}
console.log("Estas fueron las personas que ingresaste:");
console.log(n1, ": ", e1);
console.log(n2, ": ", e2);
console.log(n3, ": ", e3);