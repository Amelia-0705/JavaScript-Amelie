// 6 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
//version mas robusta

const base = parseFloat(prompt("Ingresá la base del rectángulo:"));
const altura = parseFloat(prompt("Ingresá la altura del rectángulo:"));

const PerimetroRectangulo = (a, b) => 2 * (a + b);

if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
  console.log("El perímetro es: " + PerimetroRectangulo(base, altura));
} else {
  console.log("Datos inválidos. Por favor ingresá números positivos.");
}
