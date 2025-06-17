for (let i = 1; i <= 500; i++) {
  let etiquetas = [];   // vuelvo a vaciar el array

  if (i % 4 === 0) etiquetas.push("Múltiplo de 4");
  if (i % 9 === 0) etiquetas.push("Múltiplo de 9");  // array puede ser ["Múltiplo de 4", "Múltiplo de 9"]
  
  const linea = etiquetas.length ? `${i} (${etiquetas.join(", ")})` : `${i}`;
  console.log(linea);

  if (i % 5 === 0) {
    console.log("-".repeat(20));
  }
}

//El método .push()  añade un nuevo elemento al final de ese array.

//const linea = etiquetas.length ? `${i} (${etiquetas.join(", ")})` : `${i}`;
//uso el operador ternario para construir 
// una cadena dinámica basada en el contenido del array etiquetas

//const linea = etiquetas.length    --> evalua su el array etiquetas tienen elementos
//  ? `${i} (${etiquetas.join(", ")})`    // cuando es true
//  : `${i}`                         // cuando el arreglo esta vacio solo escribo el valor de i


//.join(", ") convierte ese array en una sola cadena, separando los elementos por comas y un espacio. 
// Por ejemplo: ["Múltiplo de 4", "Múltiplo de 9"] → "Múltiplo de 4, Múltiplo de 9"

//Si hay etiquetas, construye un string como: 36 (Múltiplo de 4, Múltiplo de 9)
//Porque:      ${i} es el número actual.
//  etiquetas.join(", ") convierte ["Múltiplo de 4", "Múltiplo de 9"] en "Múltiplo de 4, Múltiplo de 9".
