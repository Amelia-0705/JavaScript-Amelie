
    let resultado = "";
    let continuar = true;

    while (continuar) {
      let entrada = prompt("Ingresa una cadena de texto:");
      
      //.trim() elimina los espacios al principio y al final de esa cadena.
      if (entrada !== null && entrada.trim() !== "") {
        resultado += resultado ? "-" + entrada : entrada;
      }

      continuar = confirm("¿Querés ingresar otra cadena?");
    }

    // Mostrar el resultado en el HTML
   console.log("Cadenas concatenadas: ", resultado);
