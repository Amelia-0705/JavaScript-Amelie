//  Escribir un programa que solicite una nota (número) de 0  a 10.
// Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
// de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
// “Introduce un número válido”.
// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

let nota = -1;
nota = parseInt(prompt("Ingrese la calificacion obtenida"));

while (nota < 0 || nota > 10) {
  console.log(nota, "el numero es erroneo");
  nota = parseInt(prompt("Introduce un numero valido -Nro entero entre 0 y 10"));
}

switch (true) {
  case nota === 10:
    console.log("Sobresaliente");
    break;
  case nota >= 8:
    console.log("Notable");
    break;
  case nota >= 7:
    console.log("Bien");
    break;
  case nota >= 5:
    console.log("Suficiente");
    break;
  case nota >= 3:
    console.log("Insuficiente");
    break;
  default:
    console.log("Muy deficiente");
    break;
}
