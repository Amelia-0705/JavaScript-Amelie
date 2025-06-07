//Ejercicio 1 hecho todos juntos en clases
let multiplos = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log("El nro", i, "es multiplo de 3");
    multiplos++;

  }
}
console.log("La cantidad de nros multiplos de 3 es", multiplos);
