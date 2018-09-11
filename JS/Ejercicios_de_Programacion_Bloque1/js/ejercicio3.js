'use stritc'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var aux = true;
do {
    var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
    var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));

    if (isNaN(num1 * num2)) {
        alert("Introduce numeros correctos");
    } else if (num2 < num1) {
        alert("El segundo numero debe ser mayor que el primero");
    } else {
        document.write("<h1> De " + num1 + " a " + num2 + " estan estos numeros:</h1>")
        for (let index = num1; index <= num2; index++) {
            console.log(index);
            document.write(index + "<br>");
        }
        aux = false;
    }

} while (aux);