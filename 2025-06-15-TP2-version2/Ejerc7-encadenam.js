const entrada = prompt("Ingresa un número del 1 al 50:");
const numero = Number(entrada?.trim());

if (!Number.isInteger(numero) || numero <= 0 || numero > 50) {
  console.log(`"${entrada}" no es un número válido entre 1 y 50.`);
} else {
  for (let i = numero; i >= 1; i--) {
    console.log(`${i}`.repeat(i));
  }
}


//entrada?.trim(): Usa el operador de encadenamiento opcional (?.) para evitar errores
// si entrada es null o undefined (como cuando el usuario presiona "Cancelar" en un prompt). 
// Si entrada existe, se le aplica .trim(), que quita espacios en blanco al inicio y final de la cadena.