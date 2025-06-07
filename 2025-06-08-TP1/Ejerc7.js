// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.



// let cantidadNros = parseInt(prompt("Indica cuantos nros deseas evaluar a ver cual es el mayor"));
let cantidadNros = 3;

let cantidadComparaciones = 1;


console.log("Cantidad de nros a comparar: ", cantidadNros);

let num1 = parseInt(prompt("Introduce Primer número"));

do {
  let num2 = parseInt(prompt("Introduce otro número: "));
  console.log("Comparacion nro: ", cantidadComparaciones);

  if (num1 < num2) {
    num1 = num2;
  }

  cantidadComparaciones++;
  console.log("El mayor de los nros ingresados hasta ahora es: ", num1);
} while (cantidadComparaciones < cantidadNros);
