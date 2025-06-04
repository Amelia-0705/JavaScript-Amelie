//  Nivel de batería del celular
// Pedí al usuario que ingrese el nivel de batería (un número del 0 al 100) usando prompt().
// Convertí ese valor a número utilizando parseInt().
// Usá una estructura if / else if / else para mostrar por consola uno de los siguientes mensajes, según el nivel de batería ingresado:
// Si el valor es mayor o igual a 80, mostrar: "Batería llena 🔋".
// Si el valor es mayor o igual a 30, mostrar: "Batería media ⚠️".
// Si el valor es menor a 30, mostrar: "Batería baja, conectá el cargador 🔌".


const bateria = parseInt(prompt("Ingrese el nivel de bateria de su celular -Nro entre 0 y 100-"));
console.log("El nro es: ", bateria);

if (bateria >= 80) {
  console.log("Bateria llena");
 } else if (bateria >= 30) {
   console.log("Bateria media");
 } else {   //    bateria < 30
  console.log("Bateria baja, conectá el cargador");
}


