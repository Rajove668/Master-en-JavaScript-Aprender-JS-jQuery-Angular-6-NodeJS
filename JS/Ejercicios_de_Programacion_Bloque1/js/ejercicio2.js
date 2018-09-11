'use strict'

/*  
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y mostrar el resultado.
*/

var suma = 0;
var cantidad = 0;
var num;
var aux = true;
do {

    num = parseInt(prompt("Ingrese un numero: ", 0));
    if (isNaN(num)) {
        alert("Ingrese Numeros Correctos");
    } else if (num < 0) {
        alert("Ingreso de Numeros Finalizado");
        aux = false;
    } else {
        suma += num;
        cantidad++;
    }


} while (aux);

console.log("La suma de los (" + cantidad + ") numeros es: " + suma);
console.log("La media de todos los numeros es: " + (suma / cantidad));