'use strict'

//Bucle While

var year = 2018;

while (year <= 2051 /*!=1991*/) {
    console.log("Estamos en el Año: " + year);
    year++;
    // year--;

    if (year == 2025) {
        break;
    }

}

//Bucle Do While

var years = 20;

do {
    alert("SOLO CUANDO SEA DIFERENTE DE 20");
    years++;
} while (years < 25);