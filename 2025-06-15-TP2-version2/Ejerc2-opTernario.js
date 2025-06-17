let nota;

do {
  nota = Number(prompt("Ingrese la calificación (0 a 10):"));
  if (nota < 0 || nota > 10 || isNaN(nota)) {
    console.log(`${nota} no es una calificación válida.`);
  }
} while (nota < 0 || nota > 10 || isNaN(nota));

const mensaje =
  nota === 10
    ? "Sobresaliente"
    : nota >= 8
    ? "Notable"
    : nota >= 7
    ? "Bien"
    : nota >= 5
    ? "Suficiente"
    : nota >= 3
    ? "Insuficiente"
    : "Muy deficiente";

console.log(mensaje);
