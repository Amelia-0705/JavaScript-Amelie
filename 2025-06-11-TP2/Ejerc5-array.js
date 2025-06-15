//let DNI = parseInt(prompt("Ingrese su DNI. El número debe ser entre 0 y 99999999"));

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let sigue;

do {
  let DNI = parseInt(prompt("Ingrese su DNI. El número debe ser entre 0 y 99999999"));
  console.log("EL nro ingresado es: ", DNI);
  
  if (!isNaN(DNI) && DNI >= 0 && DNI <= 99999999) { 
    let resto = DNI % 23;
    console.log(resto);

    let letraDNI = letras[resto];
    console.log("La letra del DNI ingresado es: ", letraDNI);
  } else {
    alert("no es un número válido.El DNI debe ser número con valores entre 0 y 99999999");
  }

  sigue = confirm("¿Quieres ingresar otro nro?. Para finalizar presiona ESCAPE");
  console.log("Respuesta: ", sigue);

} while (sigue);




