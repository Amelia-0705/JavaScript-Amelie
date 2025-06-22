//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random
// para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
// repitiendo 50 veces esta operación.

let resultados = new Array(11).fill(0); // Inicializa el vector en ceros
let cantResultados = 0;

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  //console.log("Suma = ", suma);
  resultados[suma - 2]++;
}

console.log("La suma de dados: ");
for (let i = 0; i < 11; i++) {
  console.log(i + 2, "apareció ", resultados[i], "veces");
}

//Math.random()  para obtener nros entre 0 y 1
//Con --> let dado = Math.floor(Math.random() * 6) + 1;  --> obtenemos un nro entre 1 y 6
//Al multiplicar el nro por 6 nos da un número entre 0 y casi 6.
//Math.floor() redondea hacia abajo para obtener un número entero entre 0 y 5.
//Sumando 1, obtenemos un número entre 1 y 6, como en un dado real.
