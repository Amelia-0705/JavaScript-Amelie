//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("Lista de Meses: ");

//1. Usar forEach, que es más idiomático en JavaScript moderno:
meses.forEach((mes) => console.log(` • ${mes}`));

// //2. Mostrar con índice formateado (si quieres numerar los meses):
// meses.forEach((mes, i) => console.log(`${i + 1}. ${mes}`));
