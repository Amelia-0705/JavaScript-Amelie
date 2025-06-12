let frutas = ["manzana", "pera", "uva"];

//mostrar valores
console.log(frutas);

//modificar un valor del arreglo
frutas[1] = "banana";
console.log(frutas);

//tamanio del arreglo
console.log(frutas.length);

//agregar un elemento
frutas.push("sandia");
console.log(frutas);

//elimino el primer elemento del array
frutas.shift();
console.log(frutas);

//muestro uno a uno los elementos del array
//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}

for (let fruta of frutas) {
  console.log(fruta);
}

//Elimino el ultimo elemento
//frutas.pop();
//

//agrego elemeto al inicio del array
frutas.unshift("mango");
console.log(frutas);

// para ver si un valor esta en el array
console.log(frutas.includes("banana"));

//indexOf
console.log(frutas.indexOf("mango"));

//splice()
//frutas.splice(1, 1, "kiwi");
//console.log(frutas);

//slice()  devuelve parte del arreglo. creando uno nuevo
//let arrayCopia = frutas.slice(1, 3);
//console.log(frutas);
//console.log(arrayCopia);
