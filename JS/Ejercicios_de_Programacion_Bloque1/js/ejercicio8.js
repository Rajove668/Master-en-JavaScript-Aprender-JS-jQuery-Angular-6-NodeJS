'use strict'

/*
Calculadora
*/

var aux;
do {
    aux = false;
    var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
    var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));
    if (isNaN(num1 * num2)) {
        alert("Ingrese un Numero Valido");
        aux = true;
    }
} while (aux);

document.write("<h1> Los Resultados de las operaciones entre " + num1 + " y " + num2 + " Son: </h1>");

var resultados = "La Suma es: " + num1 + " + " + num2 + " = " + (num1 + num2) + "<br>" +
    "La Resta es: " + num1 + " - " + num2 + " = " + (num1 - num2) + "<br>" +
    "La Multiplicación es: " + num1 + " x " + num2 + " = " + (num1 * num2) + "<br>" +
    "La División es: " + num1 + " / " + num2 + " = " + (num1 / num2) + "<br>";
var resultadosCMD = "La Suma es: " + num1 + " + " + num2 + " = " + (num1 + num2) + "\n" +
    "La Resta es: " + num1 + " - " + num2 + " = " + (num1 - num2) + "\n" +
    "La Multiplicación es: " + num1 + " x " + num2 + " = " + (num1 * num2) + "\n" +
    "La División es: " + num1 + " / " + num2 + " = " + (num1 / num2) + "\n";

document.write(resultados);
console.log(resultadosCMD);
alert(resultadosCMD);