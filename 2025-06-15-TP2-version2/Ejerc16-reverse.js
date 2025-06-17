const frase = prompt("Ingresa la frase que quieres analizar")?.trim();

if (frase) {
  const reverso = [...frase].reverse().join("");
  console.log("La frase al revés es:", reverso);
} else {
  console.log("No ingresaste ninguna frase válida.");
}


//[...frase] 
//funcionamiento del operador spread   -->convierte la cadena en un array carácter por carácter, incluso soportando emojis o letras especiales.
//[..."hola"] → ["h", "o", "l", "a"]


//.reverse() invierte el array sin usar bucles manuales.
//["h", "o", "l", "a"].reverse():
//["h", "o", "l", "a"] → ["a", "l", "o", "h"]


//.join("") --> Une todos los elementos en una sola cadena de texto, sin espacios entre ellos:
//["a", "l", "o", "h"].join("") → "aloh"
