'use strict'
let operador;
let numeros;
let resultado;
let comprobador;
let volverPreguntar;

alert("¡Bienvenid@!");

do {

    do {
        operador = prompt("Escribe el operador de la operación a realizar(+, -, /, *)");
        operador = operador.trim();
        if (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-") {
            alert("No has introducido una operación no válida")
        }
    } while (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-");

    do {
        comprobador = true;
        numeros = prompt("Escribe dos números separados por espacio");
        numeros = numeros.trim();
        numeros = numeros.split(" ");
        numeros = numeros.filter(Number);
        numeros[0] = Number(numeros[0]);
        numeros[1] = Number(numeros[1]);

        for (let index = 0; index < numeros.length; index++) { //Compruebo si es un NaN
            if (isNaN(numeros[index])) {
                comprobador = false;
            }
        };

        if (comprobador === false) {
            alert("Has escrito algo que no son números. Vuélvalo a intentar")
        }
    } while (comprobador === false);

    switch (operador) {
        case "/":
            resultado = numeros[0] / numeros[1];
            break;

        case "*":
            resultado = numeros[0] * numeros[1];
            break;

        case "-":
            resultado = numeros[0] - numeros[1];
            break;

        case "+":
            resultado = numeros[0] + numeros[1];
            break;
    }

    alert(`El resultado es: ${resultado}`);
    volverPreguntar = confirm("¿Quieres realizar otra operación");

} while (volverPreguntar === true);