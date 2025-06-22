// 6 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

const base = parseInt(prompt("Ingresá la base del rectángulo:"));
const altura = parseInt(prompt("Ingresá la altura del rectángulo:"));

const PerimetroRectangulo = (base, altura) => 2 * (base + altura);

console.log(PerimetroRectangulo(base, altura));