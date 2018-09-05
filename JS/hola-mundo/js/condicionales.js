'use strict'

//Condicional IF

var edad1 = 69;
var nombre = "Ramiro";

/* Operadores Relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Diferente: !=
    Igual tipo de dato y contenido: ===
*/
if (edad1 >= 18) {
    console.log(nombre + " tiene " + edad1 + " años, es mayor de edad");

    if (edad1 <= 33) {
        console.log("Todavia eres millenial");
    } else if (edad1 >= 70) {
        console.log("Eres Anciano");
    } else {
        console.log("Ya no eres millenial");
    }

} else {
    console.log(nombre + " tiene " + edad1 + " años, es menor de edad");
}

/* Operadores Logicos 
    AND(Y): &&
    OR(O): ||
    NEGACION: !
*/

var year = 2018;

//Navegacion
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

//AND
if (year >= 2000 && year <= 2020 /* && year != 2018*/) {
    console.log("Estamos en la era Actual");
} else {
    console.log("Estamos en la era Post Moderna");
}
//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no registrado");
}