'use strict'
let operador;
let numeros;
let resultado;
let comprobador;
let volverPreguntar;

let calculadora = {
    lastResult: Number(1 - 1),

    sumar(numeros) {
        return numeros[0] + numeros[1];
    },

    restar(numeros) {
        return numeros[0] - numeros[1];
    },

    multiplicar(numeros) {
        return numeros[0] * numeros[1];
    },

    dividir(numeros) {
        return numeros[0] / numeros[1];
    }


}

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
    if (numeros.includes("R")) {
        let posicion = Number(numeros.indexOf("R"));
        numeros[posicion] = Number(calculadora.lastResult);

    }
    if (numeros.includes(0)) {  //Soluciona la rareza de Javascript 0 = false
        let posicionCero = Number(numeros.indexOf(0));
        numeros[posicionCero] = 1;
        numeros = numeros.filter(Number);
        numeros[posicionCero] = Number(0);
        numeros[0] = Number(numeros[0]);
        numeros[1] = Number(numeros[1]);
        return numeros;
    } else {
        numeros = numeros.filter(Number);
        numeros[0] = Number(numeros[0]);
        numeros[1] = Number(numeros[1]);
        return numeros;
    }

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
            resultado = calculadora.dividir(numeros);
            break;

        case "*":
            resultado = calculadora.multiplicar(numeros);
            break;

        case "-":
            resultado = calculadora.restar(numeros);
            break;

        case "+":
            resultado = calculadora.sumar(numeros);
            break;
    }

    calculadora.lastResult = resultado;
    alert(`El resultado es: ${resultado}`);
    volverPreguntar = confirm("¿Quieres realizar otra operación");

} while (volverPreguntar === true);