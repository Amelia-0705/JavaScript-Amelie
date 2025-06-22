//4- Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

let numero = parseInt(prompt("Ingrese el nro que quiere saber si es para o impar"));

function esPar(numero) {
  if (numero % 2 === 0) {
    return "Es nro ingresado es par";
  } else {
    return "Es nro ingresado es impar";
  }
}

console.log(esPar(numero));