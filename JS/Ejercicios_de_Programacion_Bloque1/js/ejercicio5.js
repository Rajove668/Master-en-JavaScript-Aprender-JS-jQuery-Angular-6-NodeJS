'use strict'

/* 
Muestre todos los numeros divisores de un numero introducido en un prompt
*/

var num = parseInt(prompt("Introduce un numero: ", 1));

for (let index = 1; index <= num; index++) {
    if (num % index == 0) {
        console.log("Divisor: " + index);
    }
}