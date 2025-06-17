const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F', 'P', 'D', 'X', 'B', 'N', 
                'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

function obtenerLetraDNI(dni) {
  return letras[dni % 23];
}

function esDNIValido(dni) {
  return !isNaN(dni) && dni >= 0 && dni <= 99999999;
}

let continuar = true;

while (continuar) {
  const entrada = prompt("Ingrese su DNI (entre 0 y 99.999.999):");

  if (entrada === null) break;

  const dni = Number(entrada.trim());
  console.log(`El número ingresado es: ${dni}`);

  if (esDNIValido(dni)) {
    const letra = obtenerLetraDNI(dni);
    console.log(`La letra del DNI ingresado es: ${letra}`);
  } else {
    alert("DNI no válido. Debe ser un número entre 0 y 99.999.999");
  }

  continuar = confirm("¿Quieres ingresar otro número?");
}
