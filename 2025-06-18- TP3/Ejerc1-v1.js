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
  "Diciembre"
];

console.log("Lista de Meses: ");

for (let mes of meses) {
  console.log(" • ", mes);
}


//otra opcion menos usada: (quizas mas vieja?)
// for (let i = 0; i < meses.length; i++) {
//   console.log(" • ", meses[i]);
// }
