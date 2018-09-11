'use stritc'

/*
Programa que pida dos numeros y nos diga cual es el mayor, si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a 0, vuelva a pedir
*/

var aux = false;

do {

    var num1 = parseInt(prompt("Ingrese el numero (+) 1", 0));
    var num2 = parseInt(prompt("Ingrese el numero (+) 2", 0));

    console.log(num1, num2);

    if (num1 <= 0 || num2 <= 0 || isNaN(num1 * num2)) {
        alert("Ingrese Numeros Correctos");
        aux = true;
    }

} while (aux);

if (num1 > num2) {
    alert(num1 + " Es mayor que " + num2);
} else if (num1 < num2) {
    alert(num2 + " Es mayor que " + num1);
} else if (num1 == num2) {
    alert(num2 + " Son Iguales " + num1);
} else {
    alert("COMPA SE EXPLOTO");
}
