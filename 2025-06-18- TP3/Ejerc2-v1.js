// 2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas
// en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado

let ciudades = [];
let ciudad = prompt("Ingresá el nombre de una ciudad o Cancelar para salir");

while (ciudad !== null) {
  if (ciudad !== "") {
    ciudades.push(ciudad);
  }
  ciudad = prompt("Ingresá otra ciudad o Cancelar para salir");
}

console.log("Las ciudades ingresadas son: ", ciudades);

//Mostrar la longitud del arreglo.
console.log("Las longitud del arreglo es: ", ciudades.length);

// Mostrar en el --documento web?--   x consola los ítems de las posiciones primera, tercera y última.

if (ciudades.length > 0) {
  console.log("La ciudad de la primera posicion es: ", ciudades[0]);

  if (ciudades[2] !== undefined) {
    console.log("La ciudad de la tercera posicion es: ", ciudades[2]);
  } else {
    console.log("No hay ciudad ingresada en la tercera posicion");
  }

  console.log(
    "La ciudad de la ultima posicion es: ",
    ciudades[ciudades.length - 1]
  );
}

//Añade en última posición la ciudad de París.
ciudades.push("Paris");

console.log("Las ciudades ingresadas son: ", ciudades);
//Escribe por pantalla el elemento que ocupa la segunda posición.
if (ciudades.length > 1) {
  console.log("La ciudad de la segunda posicion es: ", ciudades[1]);
}

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";
console.log("Las ciudades al final son: ", ciudades);