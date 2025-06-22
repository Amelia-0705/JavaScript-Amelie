const resultados = Array(11).fill(0);

for (let i = 0; i < 50; i++) {
  const suma = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
  resultados[suma - 2]++;
}

// Crear un array de objetos para que console.table los muestre en formato tabular
const tablaResultados = resultados.map((cantidad, i) => ({
  Suma: i + 2,
  Veces: cantidad
}));

console.log("Resultados en forma de tabla:");
console.table(tablaResultados);

//.map() crea un nuevo array aplicando una función a cada elemento del array original.

//cada índice representa la suma posible de dos dados (de 2 a 12).
//.map() recorre cada elemento (cantidad) y su índice (i).