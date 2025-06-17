const filas = Number(prompt("Ingrese el número de filas:")?.trim());
const columnas = Number(prompt("Ingrese el número de columnas:")?.trim());

if (
  Number.isInteger(filas) &&
  Number.isInteger(columnas) &&
  filas > 0 &&
  columnas > 0
) {
  let valor = filas * columnas;

  for (let i = 0; i < filas; i++) {
    const fila = Array.from({ length: columnas }, () => String(valor--).padStart(4, " "));
    console.log(fila.join(" "));
  }
} else {
  console.log("Por favor, ingresá filas y columnas como números enteros mayores que cero.");
}

//?.trim()    --> es un encadenamiento opcional (el famoso ?.).
//Solo ejecuta .trim() si el resultado del prompt no es null ni undefined
//Porque si el usuario cancela, el valor sería null, y llamar .trim() sobre null daría un error.
// El ?. evita que de error.

//const fila = Array.from({ length: columnas }, () => String(valor--).padStart(2, " "));
// Array.from({ length: columnas }  -->   Esto crea un array de longitud columnas
//Array.from({ length: 4 }) → [undefined, undefined, undefined, undefined]

//(_, i) => String(valor--).padStart(2, " ")   --> es una función flecha que se ejecuta una vez 
// por cada elemento del array que estamos creando.

//String(valor--) convierte lo que tenga valor (= filas * col) en texto  y luego lo decrementa.
//.padStart(4," ") se asegura de que cada número tenga al menos 4 caracteres, 
// rellenando con espacios si hace falta para que la salida tenga forma de tabla.

//La función genera un array con columnas elementos formateados y descendentes. 
// Ejemplo si columnas = 4 y valor empieza en 12
//["12", "11", "10", " 9"]

//fila.join(" ")   --> convierte el array en una cadena de texto. Une los elem con espacio entre cada uno.
//12 11 10  9

