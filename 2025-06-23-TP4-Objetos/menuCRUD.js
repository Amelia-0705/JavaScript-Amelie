function mostrarMenu() {
  const opcion = prompt(
    "=== MENÚ CRUD ===\n" +
      "1. Agregar pelicula\n" +
      "2. Listar peliculas\n" +
      "3. Actualizar pelicula\n" +
      "4. Buscar pelicula\n" +
      "5. Eliminar pelicula\n" +
      "6. Salir\n" +
      "Seleccioná una opcion (1-6):"
  );

  switch (opcion) {
    case "1":
      console.log("Seleccionaste Agregar pelicula");
      break;
    case "2":
      console.log("Seleccionaste Listar peliculas");
      break;
    case "3":
      console.log("Seleccionaste Actualizar peliculas");
      break;
    case "4":
      console.log("Seleccionaste Buscar pelicula");
      break;
    case "5":
      console.log("Seleccionaste Eliminar pelicula");
      break;
    case "6":
      console.log("Saliendo del menú...");
      break;
    default:
      console.log("Opción no valida. Selecciona una opción entre 1 y 6");
  }
}

mostrarMenu();
