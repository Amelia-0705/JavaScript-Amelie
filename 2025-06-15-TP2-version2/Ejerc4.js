let suma = 0;
let continuar = true;

while (continuar) {
  let entrada = prompt("Ingresa un número para sumar. Cancelar para salir:");

  if (entrada === null) {
    // El usuario presionó ESC / Cancelar
    continuar = false;
  } else {
    let numero = Number(entrada);

    if (!isNaN(numero)) {
      suma += numero;
      console.log(`Sumando: ${numero}`);
    } else {
      alert("Eso no parece un número válido.");
    }
  }
}

console.log(`La suma total es: ${suma}`);
