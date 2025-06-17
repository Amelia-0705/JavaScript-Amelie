// agrega validacion de existencia de texto

const texto = prompt("Ingrese un texto:");
if (texto) {
  const resultado = texto.toUpperCase();
  console.log("Texto en mayúsculas:", resultado);
} else {
  console.log("No ingresaste ningún texto.");
}