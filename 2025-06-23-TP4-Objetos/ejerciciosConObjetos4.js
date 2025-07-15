// 📝 Ejercicio 4:
// Crear un arreglo llamado "libros", que contenga al menos 3 objetos con propiedades: titulo, autor, año.
// Luego recorrer ese arreglo con forEach y mostrar los títulos por consola.


const libros = [
  { titulo: "El principito", autor: "Antoine Saint-Exupéry", anio: 1943 },
  { titulo: "Crimen y castigo", autor: "Fiodor Dostoyevski", anio: 1867 },
  { titulo: "El hombre en busca de sentido", autor: "Viktor Emil Frankl", anio: 1946 },
];

console.log(libros);
libros.forEach((libro,index) => console.log( `${index + 1} - ${libro.titulo}`));
