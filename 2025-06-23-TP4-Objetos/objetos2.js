// console.log("Hola mundo");

// const frutas = ["manzana", "pera", "kiwi"];
// const verduras = ["tomate", "zanahoria", "zapallo"];

// const listadoVerduleria = [...frutas, ...verduras]
// const listadoDeArreglos = [frutas, verduras]

// //Spread = ...  --> expande los elementos

// console.log(listadoVerduleria);
// console.log(listadoDeArreglos);




// //Desestructuración de objetos  -- permite extraer propiedades de un objeto de forma concisa.

const persona = {
  nombre: "Lucía",
  edad: 10,
  profesion: "Desarrolladora"
};

const { nombre, edad } = persona;
console.log(nombre); // "Lucía"
console.log(edad);   // 30

//Operador ternario con objetos

let estado = persona.edad >= 18 ? "Mayor" : "Menor";
console.log(estado); // "Mayor"
