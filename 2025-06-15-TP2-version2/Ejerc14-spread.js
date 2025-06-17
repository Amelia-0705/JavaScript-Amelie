const entrada = prompt("Ingrese una cadena de texto:")?.trim();

if (entrada) {
  const resultado = [...entrada].join("-");   // [...] — Operador de propagación (spread)
  console.log("Resultado:", resultado);
} else {
  console.log("No ingresaste texto válido.");
}

//?.trim(): elimina espacios vacíos y evita errores si el usuario cancela.

//se asegura de que haya texto antes de procesar.

//[...entrada] en lugar de split(''): Es una forma moderna y más segura de convertir cadenas a arrays, 
// especialmente con caracteres Unicode o emojis (por ejemplo, "👨‍👩‍👧‍👦" se divide correctamente).

//resultado = [...entrada].join("-");
//[...entrada]  -->  Convierte la cadena entrada en un array, separando cada carácter en un elemento distinto del array

//ejemplo:  entrada = "Hola"    -->    [...entrada] → ["H", "o", "l", "a"]
// .join("-")  -->  transforma ese array en una sola cadena de texto, uniendo cada elemento con un guion


//Para  entrada = "Hola"    -->   resultado = [..."Hola"].join("-") → "H-o-l-a"


//Menor riesgo de errores si el prompt devuelve null o una cadena vacía.