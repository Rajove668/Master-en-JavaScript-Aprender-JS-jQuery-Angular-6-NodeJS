'use strict'

/*  
 Programa que nos diga si un numero es par o impar
 1. Ventana prompt
 2. Si un num no es valido que lo pida  de nuevo
*/

var aux;
do {
    aux = false;
    var num = parseInt(prompt("Introduce un numero para saber si es par o impar: ", 0));
    if (isNaN(num)) {
        alert("Ingrese un Numero Valido");
        aux = true;
    }
} while (aux);

if (num % 2 == 0) {
    console.log("Es Par");
} else {
    console.log("Es Impar");
}