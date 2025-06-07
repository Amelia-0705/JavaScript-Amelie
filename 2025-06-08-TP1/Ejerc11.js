//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
// (hay que decir todos por los que es divisible)
let numero = parseInt(prompt("Ingrese el nro que desea analizar"));

if (numero % 2 === 0) {
  console.log("El nro", numero, "es divisible por 2");
}
if (numero % 3 === 0) {
  console.log("El nro", numero, "es divisible por 3");
}
if (numero % 5 === 0) {
  console.log("El nro", numero, "es divisible por 5");
}
if (numero % 7 === 0) {
  console.log("El nro", numero, "es divisible por 7");
}

// switch (true) {
//   case (numero % 2) === 0:
//     console.log("El nro", numero, "es divisible por 2");
//     console.log(numero % 2);

//   //break;
//   case (numero % 3) === 0:
//     console.log("El nro", numero, "es divisible por 3");
//     console.log(numero % 3);
//   //break;
//   case (numero % 5) === 0:
//     console.log("El nro", numero, "es divisible por 5");
//     console.log(numero % 5);
//   //break;
//   case (numero % 7) === 0:
//     console.log("El nro", numero, "es divisible por 7");
//     console.log(numero % 7);
//   //break;
//   default:
//     //console.log(numero, "No es divisible ni por 2 ni por 3, ni por 5, ni por 7");
//     break;
// }
