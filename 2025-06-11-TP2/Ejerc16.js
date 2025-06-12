let fraseUsuario = prompt("Ingresa la frase que quieres analizar");

let cantLetras = fraseUsuario.length;

let deletreo = [];
let letraActual = "";
let cadena = "";

for (let i = 0; i < cantLetras; i++) {
  letraActual = fraseUsuario.substring(i, i + 1);
  //console.log("Deletreo la frase: ", letraActual);
  deletreo[i] = letraActual;
}

for (let i = cantLetras - 1; i >= 0; i--) {
  letraActual = deletreo[i];
  cadena += letraActual;

  //console.log("La frase al reves es: ", cadena);
}

 console.log("La frase al reves es: ", cadena);