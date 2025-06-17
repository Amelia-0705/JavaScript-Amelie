const texto = prompt("Ingrese un texto:")?.toLowerCase();
let contador = 0;

if (texto) {
  for (let letra of texto) {     //for...of que recorre la cadena carácter por carácter
    if ("aeiou".includes(letra)) {    //verifica si la letra actual está dentro del conjunto "aeiou"
      //console.log(letra);
      contador++;   
    }
  }

  console.log(`El texto tiene ${contador} vocal${contador === 1 ? "" : "es"}.`);
} else {
  console.log("No ingresaste texto válido.");
}


//${...}  para insertar variables o expresiones dinámicamente
//${contador}  inserta el valor de la variable contador directamente en la cadena.

//${contador === 1 ? "" : "es"} (operador ternario)

//Si contador === 1, la expresión devuelve "" (cadena vacía) → Resultado: "1 vocal"console.log("El texto tiene 4 vocales.");

//Si no es 1 (por ejemplo, 0, 2, 3...), devuelve "es" → Resultado: "2 vocales", "0 vocales"
//Este ternario evita tener que usar una estructura if separada para el plural.

//Entonces, si por ejemplo contador = 1:
//console.log("El texto tiene 1 vocal.");
//Y si contador = 4:
//console.log("El texto tiene 4 vocales.");
