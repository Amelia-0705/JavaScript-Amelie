//17- Realiza un script que muestre la posición de la primera
// vocal de un texto introducido por teclado.

let fraseUsuario = prompt("Ingresa la frase que quieres analizar");

// paso las letras todas a minuscula
fraseMin = fraseUsuario.toLowerCase();
let cantLetras = fraseUsuario.length;
let esVocal = false;
let i = 0;

console.log("La frase es: ", fraseMin);
do {
  letraActual = fraseMin.substring(i, i + 1);

  if (
    letraActual == "a" ||
    letraActual == "e" ||
    letraActual == "i" ||
    letraActual == "o" ||
    letraActual == "u"
  ) {
    esVocal = true;
  }
  i++;
} while (!esVocal && i < cantLetras);

if (esVocal) {
  console.log("La primera vocal encontrada fue: ", letraActual);
} else {
  console.log("La frase no tiene vocales");
}
