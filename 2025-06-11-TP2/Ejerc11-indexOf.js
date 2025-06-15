// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e
// indique el nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// Declaro arrays para guardar los nombres y edades correspondientes
let nombre = [];
let edad = [];

for (let i = 0; i < 3; i++) {
  nombre[i] = prompt("Ingrese el nombre de la persona");
  edad[i] = parseInt(prompt("Ingrese la edad:"));
}

let mayor = Math.max(...edad);
let indiceDelMayor = edad.indexOf(mayor);

console.log("La persona mayor es:", nombre[indiceDelMayor], "con", mayor, "años");