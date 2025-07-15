const persona = {
  nombre: "Lucía",
  edad: 30,
  profesion: "Desarrolladora",
};

console.log(persona.nombre);
console.log(persona.edad); // =   console.log(persona["edad"]);  --> funciona pero no ser usa

//Agregar una propiedad al objeto
persona.nacionalidad = "Argentina";
console.log(persona);

//modificar una propiedad del objeto - Ej el nombre
persona.nombre = "Leandro";

//Para eliminar una propiedad usamos delete:
//delete persona.profesion;

//Recorrer un objeto  -->   Para iterar sobre todas las propiedades de un objeto usamos for...in:
for (let clave in persona) {     //clave - valor
  console.log(clave + ": " + persona[clave]);
}


