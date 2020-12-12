let num = Number();
let salario = Number();
for (num = 1; num <= 6; num++) {
    salario = 1500 * 1.10 ** num;
    console.log("Su salario en el año ", num, " es de ", salario);
}