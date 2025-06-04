// Convertí la opción ingresada a número usando parseInt().
// Usá una estructura switch para mostrar por consola el mensaje correspondiente a cada opción:
// Si elige 1, mostrar: "Mostrando saldo disponible...".
// Si elige 2, mostrar: "Iniciando proceso de retiro...".
// Si elige 3, mostrar: "Depósito en curso...".
// Si elige 4, mostrar: "Cargando últimos movimientos...".
// Si elige 5, mostrar: "Redirigiendo para cambiar la clave...".
// Si elige 6, mostrar: "Preparando transferencia...".
// Si elige 7, mostrar: "Gracias por usar el cajero. ¡Hasta pronto!".
// En cualquier otro caso, mostrar: "Opción inválida. Por favor, seleccioná una opción del 1 al 7."

let opcion = parseInt(
  prompt(
    "Elija el número de la opción:\n" +
      "1 - Consultar saldo \n" +
      "2 - Retirar dinero \n" +
      "3 - Depositar dinero \n" +
      "4 - Ver últimos movimientos  \n" +
      "5 - Cambiar clave   \n" +
      "6 - Transferir dinero   \n" +
      "7 - Salir"
  )
);

switch (opcion) {
  case 1:
    console.log("Mostrando saldo disponible...");
    break;
  case 2:
    console.log("Iniciando proceso de retiro...");
    break;
  case 3:
    console.log("Depósito en curso...");
    break;
  case 4:
    console.log("Cargando últimos movimientos...");
    break;
  case 5:
    console.log("Redirigiendo para cambiar la clave...");
    break;
  case 6:
    console.log("Preparando transferencia...");
    break;
  case 7:
    console.log("Gracias por usar el cajero. ¡Hasta pronto!");
    break;
  default:
    console.log(
      "Opción inválida. Por favor, seleccioná una opción del 1 al 7."
    );
    break;
}
