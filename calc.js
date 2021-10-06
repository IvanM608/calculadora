'use strict'
let operador;
let numeros;
let resultado;
let comprobador;
let volverPreguntar;

//Se comprueba si el carácter coincide con un operador válido
function comprobarOperador(operador) {
    operador = operador.trim();
    if (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-") {
        alert("No has introducido una operación no válida");
    }
    return operador;
}

//Extrae los números de un string y los devuelve en un array
let filtrarNumeros = function (numeros) {
    numeros = numeros.trim();
    numeros = numeros.split(" ");
    numeros = numeros.filter(Number);
    numeros[0] = Number(numeros[0]);
    numeros[1] = Number(numeros[1]);
    return numeros;
}

//Se comprueba si un array SOLO contiene números y devuelve true o false
let comprobarNumeros = function (numeros, comprobador) {
    for (let index = 0; index < numeros.length; index++) {
        if (isNaN(numeros[index])) {
            comprobador = false;
        }
    }

    if (comprobador === false) {
        alert("Has escrito algo que no son números. Vuélvalo a intentar");
    }
    return comprobador;
}

//Realiza una división con los números de las dos primeras posiciones de un array
let dividir = (numeros) => numeros[0] / numeros[1];

//Realiza una multiplicación con los números de las dos primeras posiciones de un array
let multiplicar = (numeros) => numeros[0] * numeros[1];

//Realiza una resta con los números de las dos primeras posiciones de un array
let restar = (numeros) => numeros[0] - numeros[1];

//Realiza una suma con los números de las dos primeras posiciones de un array
let sumar = (numeros) => numeros[0] + numeros[1];

alert("¡Bienvenid@!");

do {

    do {
        operador = prompt("Escribe el operador de la operación a realizar(+, -, /, *)");
        operador = comprobarOperador(operador);
    } while (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-");

    do {
        comprobador = true;
        numeros = prompt("Escribe dos números separados por espacio");
        numeros = filtrarNumeros(numeros);
        comprobador = comprobarNumeros(numeros, comprobador);
    } while (comprobador === false);

    switch (operador) {
        case "/":
            resultado = dividir(numeros);
            break;

        case "*":
            resultado = multiplicar(numeros);
            break;

        case "-":
            resultado = restar(numeros);
            break;

        case "+":
            resultado = sumar(numeros);
            break;
    }

    alert(`El resultado es: ${resultado}`);
    volverPreguntar = confirm("¿Quieres realizar otra operación");

} while (volverPreguntar === true);