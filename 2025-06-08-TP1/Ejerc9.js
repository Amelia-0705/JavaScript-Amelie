//  9- Escribe un programa que pida una frase y escriba las vocales que aparecen
//  Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let fraseUsuario = prompt("Ingresa la frase que quieres analizar");

// eliminio los blancos de la frase
let fraseSinBlancos = fraseUsuario.replace(/\s+/g, "");
//console.log("La frase original sin espacios es: ", fraseSinBlancos);

// paso las letras todas a minuscula
fraseSinBlancos = fraseSinBlancos.toLowerCase();

console.log("La frase original sin espacios y en minuscula es: ", fraseSinBlancos);
let cantLetras = fraseSinBlancos.length;

let letraActual = "";
let vocales = "";
//console.log("La cantidad de letras de la frase ingresada es: ", cantLetras);

for (let i = 0; i < cantLetras; i++) {
  letraActual = fraseSinBlancos.substring(i, i + 1);
  //console.log("Deletreo la frase: ", letraActual);

  if (
    letraActual == "a" ||
    letraActual == "e" ||
    letraActual == "i" ||
    letraActual == "o" ||
    letraActual == "u"
  ) {
   // console.log(letraActual);
    vocales += letraActual;
  }
}

console.log("Las vocales que aparecen son: ", vocales);
