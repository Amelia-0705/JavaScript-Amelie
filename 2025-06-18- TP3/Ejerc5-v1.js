//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como
//argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function analizarCadena(fraseUsuario) {
  if (fraseUsuario === fraseUsuario.toUpperCase()) {
    return "La frase ingresada solo contiene mayúsculas.";
  } else if (fraseUsuario === fraseUsuario.toLowerCase()) {
    return "La frase ingresada solo contiene minúsculas.";
  } else {
    return "La frase ingresada contiene una mezcla de mayúsculas y minúsculas.";
  }
}

let fraseUsuario = prompt("Ingrese la frase que vamos a analizar");
console.log(analizarCadena(fraseUsuario));
