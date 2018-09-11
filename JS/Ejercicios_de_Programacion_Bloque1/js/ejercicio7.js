'use stritc'

/*
Tabla de multiplicar de Un numero introducido por pantalla.
*/


var num = parseInt(prompt("¿De que numero quieres la tabla?", 1));

for (let index = 1; index <= 10; index++) {
    console.log(index + " X " + num + " = " + (index * num));
}

//Todas las tablas
for (let index1 = 0; index1 <= 10; index1++) {
    for (let index2 = 0; index2 <= 10; index2++) {
        console.log(index2 + " X " + index1 + " = " + (index2 * index1));
    }
}

