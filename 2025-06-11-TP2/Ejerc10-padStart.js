// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo
// en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));
let cantNumeros = filas * columnas;
let cadena = "";

for (let i = 0; i < filas; i++) {
  cadena = "";
  for (let j = 0; j < columnas; j++) {
    cadena += String(cantNumeros).padStart(2, " ");
    cadena += " ";
    cantNumeros--;
  }
  console.log(cadena);
}
