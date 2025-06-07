// for (let i = 0; i < 10; i++) {
//   console.log("Numero: ", i+1);
// }

// let contador = 1;
// while (contador < 10) {
//   console.log("El contador va en el nro: ", contador);
//   contador++;
// }
// console.log("Salimos del bucle");

// let input = "";
// let intentos = 0;
// while (input != 1234) {
//   input = prompt("Ingresa tu contrasenia");
//   intentos++;
// }
// console.log("intento concedido en el nro de intento  = ", intentos);


let input = "";
let intentos = 3;

do {
  input = prompt("Ingresa tu contrasenia");
  console.log("Intentos =", intentos)
  intentos--;

} while (input != 1234);


console.log("intento concedido en el nro de intento  = ", intentos);
