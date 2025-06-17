const entrada = prompt("Ingresa un número entre 1 y 50:");
const numero = Number(entrada?.trim());

if (Number.isInteger(numero) && numero > 0 && numero <= 50) {
  for (let i = 1; i <= numero; i++) {
    const linea = Array.from({ length: i }, (_, idx) => idx + 1).join("");
    console.log(linea);
  }
} else {
  console.log(`"${entrada}" no es un número válido entre 1 y 50.`);
}


//Number(entrada?.trim()): limpia los espacios por si el usuario escribe 
// algo como " 12 " y convierte a número.
// Posibles salidas:
// ----------------Number("   25  ")        // 25
// ----------------Number("13.5")           // 13.5
// ----------------Number("")               // 0
// ----------------Number("    ")           // 0
// ----------------Number("hola")           // NaN
// ----------------Number(null)             // 0
// ----------------Number(undefined)        // NaN
// ----------------Number("42abc")          // NaN


//Number.isInteger(numero): asegura que sea un entero real, no decimales o NaN.

//Array.from(...).join(""): genera directamente la línea con los números 
// sin usar un bucle for interno. Más declarativo y elegante.

//Desglosamos la instrucc -->   const linea = Array.from({ length: i }, (_, idx) => idx + 1).join("");
//Crea un array con i elementos (por ejemplo, si i = 3, serán 3 elementos).

//El primer parámetro { length: i } define el tamaño del array.

//El segundo parámetro es una función que se ejecuta para cada índice del array. 
// Ignoramos el primer argumento (_) porque no lo necesitamos.
//idx + 1 genera números desde 1 hasta i.
//Resultado: si i = 4, se crea [1, 2, 3, 4].

//.join("") Une todos los elementos del array en una sola cadena, sin espacios ni separadores.
// Resultado final: "1234"

