function bon(cantidad) {
    if (cantidad == 1) {
        console.log("Usted recibira un bono de $100");
    }
    if (cantidad == 2) {
        console.log("Usted recibira un bono de $200");
    }
    if (cantidad == 3) {
        console.log("Usted recibira un bono de $300");
    }
    if (cantidad == 4) {
        console.log("Usted recibira un bono de $400");
    }
    if (cantidad == 5) {
        console.log("Usted recibira un bono de $500");
    }
    if (cantidad > 5) {
        console.log("Usted recibira un bono de $1000");
    }
    return console.log("Gracias por trabajar todos estos años con nosotros");
}

let cantidad = Number(prompt("Ingrese la cantida de años que lleva trabajando"));
console.log(bon(cantidad));