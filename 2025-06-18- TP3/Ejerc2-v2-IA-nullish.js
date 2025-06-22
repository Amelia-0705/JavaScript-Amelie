const ciudades = [];
let ciudad;

while (
  (ciudad = prompt(
    "Ingresá el nombre de una ciudad (o Cancelar para salir)"
  )) !== null
) {
  if (ciudad.trim()) ciudades.push(ciudad.trim());
}

if (ciudades.length) {
  console.log("Ciudades ingresadas:", ciudades);
  console.log("Longitud del arreglo:", ciudades.length);
  console.log("Primera ciudad:", ciudades[0]);
  console.log("Tercera ciudad:", ciudades[2] ?? "No hay una tercera ciudad");
  console.log("Última ciudad:", ciudades.at(-1));
} else {
  console.log("No se ingresaron ciudades.");
}

ciudades.push("Paris");

console.log("Las ciudades ingresadas son: ", ciudades);

//Escribe por pantalla el elemento que ocupa la segunda posición.
if (ciudades.length > 1) {
  console.log("La ciudad de la segunda posicion es: ", ciudades[1]);

  //Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
  ciudades[1] = "Barcelona";
  console.log("Las ciudades al final son: ", ciudades);
}

//la asignación directa en la condición del while → evita duplicar código.
//trim()  limpia espacios y evita cadenas vacías.

//  --   nullish coalescing (??)   --.
// el operador de fusión nula (??) muestra un valor alternativo solo si el primero es null o undefined.
// En este caso:   ciudades[2] intenta acceder al tercer elemento del arreglo
//     ---------Si existe un valor real en esa posición (por ejemplo "Rosario"), se muestra ese valor.
//     ---------Si no ciudades[2] será undefined, y se mostrará será: "No hay una tercera ciudad".

//.at(-1) es una forma moderna y clara de acceder al último elemento del array.
