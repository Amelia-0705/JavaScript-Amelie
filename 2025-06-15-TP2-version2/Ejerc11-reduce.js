const personas = [];  //cada persona es un objeto { nombre, edad }

for (let i = 0; i < 3; i++) {
  const nombre = prompt("Ingrese el nombre de la persona:");
  const edad = Number(prompt("Ingrese la edad:"));

  if (nombre && Number.isInteger(edad)) {
    personas.push({ nombre, edad });  // cargo el array
  } else {
    alert("Datos inválidos, intentá de nuevo.");  //solo se guarda la persona si tiene nombre y una edad válida.
    i--; // volver a intentar esta iteración
  }
}

const mayor = personas.reduce((mayorActual, persona) =>
  persona.edad > mayorActual.edad ? persona : mayorActual
);

console.log(`La persona mayor es: ${mayor.nombre} con ${mayor.edad} años.`);

//const mayor = personas.reduce((mayorActual, persona) => persona.edad > mayorActual.edad ? persona : mayorActual

//el método reduce() recorre el array personas y determinar cuál es el objeto (persona) que tiene la mayor edad.
//Esta función acumula en este caso el objeto que representa a la persona con mayor edad hasta ese punto.
//(mayorActual, persona) => ...
//mayorActual es el valor acumulado (guarda la persona con mayor edad encontrada hasta el momento).
//persona es el elemento actual del array durante cada iteración.

//persona.edad > mayorActual.edad ? persona : mayorActual:
//Si la edad de la persona actual del array (persona.edad) es mayor que la edad de la persona 
// acumulada (mayorActual.edad), ent se retorna persona para que sea el nuevo acumulador.
//Si no, se retorna mayorActual y se mantiene como la persona con mayor edad.

//Al finalizar el proceso, reduce() devuelve el objeto de personas que tiene la mayor edad, 
// y ese objeto se guarda en la constante mayor.