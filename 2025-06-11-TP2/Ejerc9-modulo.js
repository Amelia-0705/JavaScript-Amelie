// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// —————

let contadorLineas = 0;
let salida = "";

for (let i = 1; i <= 500; i++) {
  salida = i.toString();
  if (i % 4 === 0) salida += " (Múltiplo de 4)";
  if (i % 9 === 0) salida += " (Múltiplo de 9)";
  console.log(salida);
 
  contadorLineas++;
  if (contadorLineas % 5 === 0) {
    console.log("--------------------");
  }
}
