let d = new String();
do {
    let edad = Number(prompt("Escribe tu edad"));
    if (edad >= 18) {
        console.log("Puedes votar");
    } else {
        console.log("Aun no puedes votar");
    }
    console.log("¿Desea continuar? si/no");
    d = prompt();
} while (d != "no");