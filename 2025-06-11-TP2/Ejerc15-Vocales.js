//15- Realiza un script que cuente el número de vocales que tiene un texto.

let fraseUsuario = prompt("Ingresa la frase que quieres analizar");

// eliminio los blancos de la frase
let fraseSinBlancos = fraseUsuario.replace(/\s+/g, "");

// paso las letras todas a minuscula
fraseSinBlancos = fraseSinBlancos.toLowerCase();

console.log(
  "La frase original sin espacios y en minuscula es: ",
  fraseSinBlancos
);
let cantLetras = fraseSinBlancos.length;

let letraActual = "";
let cantVocales = 0;
let vocales = "";

for (let i = 0; i < cantLetras; i++) {
  letraActual = fraseSinBlancos.substring(i, i + 1);

  if (
    letraActual == "a" ||
    letraActual == "e" ||
    letraActual == "i" ||
    letraActual == "o" ||
    letraActual == "u"
  ) {
    vocales += letraActual;
    cantVocales++;
  }
}

console.log("Las cantidad de vocales que aparecen es: ", cantVocales, "son: ", vocales);
