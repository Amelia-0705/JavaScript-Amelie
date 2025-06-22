//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como
//argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const fraseUsuario = prompt("Ingrese la frase que vamos a analizar");

const analizarCadena = (fraseUsuario) => {
  
//Si la frase de Usuario esta vacia o null (Cancelar) salimos directamente para evitar errrores
  if (fraseUsuario === null || fraseUsuario.length === 0) {
    return "No se encontraron letras en la frase.";
  }

  fraseUsuario = fraseUsuario.replace(/[^a-zA-Z]/g, ""); // Filtra solo letras

  console.log(fraseUsuario);

  if (fraseUsuario === null || fraseUsuario.length === 0) {
    return "No se encontraron letras en la frase.";
  }

  const soloMayus = fraseUsuario === fraseUsuario.toUpperCase();
  const soloMinus = fraseUsuario === fraseUsuario.toLowerCase();

  if (soloMayus) return "La frase contiene solo letras mayúsculas.";
  if (soloMinus) return "La frase contiene solo letras minúsculas.";

  return "La frase contiene una mezcla de letras mayúsculas y minúsculas.";
};

console.log(analizarCadena(fraseUsuario));
