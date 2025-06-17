const texto = prompt("Ingresa una frase:")?.toLowerCase().trim();
const vocales = "aeiouáéíóúü";
let posicion = -1;

if (texto) {
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      posicion = i;
      break; // Cortamos el bucle al encontrar la primera vocal
    }
  }

  if (posicion !== -1) {
    console.log(`La primera vocal está en la posición ${posicion}.`);
  } else {
    console.log("No se encontró ninguna vocal en el texto.");
  }
} else {
  console.log("No ingresaste una frase válida.");
}
