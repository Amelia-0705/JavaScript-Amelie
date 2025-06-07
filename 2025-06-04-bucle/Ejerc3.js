//mostrar un menu con 3 opciones
// 1 - saludar
// 2 - mostrar fecha actual
// 3 - Salir


let opcion;

do{ opcion =    prompt(
    "Elija el número de la opción:\n" +
      "1 - Saludar \n" +
      "2 - Mostrar fecha actual \n" +
      "3 - Salir"
);

switch (opcion) {
  case "1":
    console.log("Hola");
    break;
  case "2":
    console.log("La fecha actual es: ", new Date().toLocaleDateString());
    break;
  case "3":
    console.log("Saliendo del programa");
    break;
  
  default:
    console.log(
      "Opción inválida. Por favor, seleccioná una opción del 1 al 3."
    );
    break;
    }
}while (opcion !== "3");