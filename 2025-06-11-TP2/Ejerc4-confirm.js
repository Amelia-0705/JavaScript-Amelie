//4- Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let nuevoNro = parseInt(
  prompt("Ingresa los nros que quieres sumar. Para finalizar pulsa ESCAPE")
);
let suma = 0;

if (!isNaN(nuevoNro)) {
  console.log("Si es un nro", nuevoNro);
  suma += nuevoNro;
} else {
  alert("no es un número válido.");
}

let respuesta = confirm(
  "¿Quieres ingresar otro nro?. Para finalizar presiona ESCAPE"
);

while (respuesta) {
  nuevoNro = parseInt(
    prompt("Ingresa los nros que quieres sumar. Para finalizar pulsa ESCAPE")
  );

  if (!isNaN(nuevoNro)) {
    console.log("nro a sumar", nuevoNro);
    suma += nuevoNro;
  } else {
    alert("no es un número válido.");
  }

  respuesta = confirm(
    "¿Quieres ingresar otro numero?. Para finalizar presiona ESCAPE"
  );
}

console.log("La suma de los nro ingresados es: ", suma);
