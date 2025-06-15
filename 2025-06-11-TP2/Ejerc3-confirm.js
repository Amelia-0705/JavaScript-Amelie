//3- Realiza un script que pida cadenas de texto
// hasta que se pulse “cancelar”. Al salir con “cancelar”
// deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let texto = prompt("Introduce una cadena de texto");

let respuesta = confirm("¿Quieres ingresar otro texto?");

while (respuesta) {
  texto = texto.concat("-");
  texto = texto.concat(prompt("Confirma el texto que deseas agregar"));
  respuesta = confirm("¿Quieres ingresar otro texto?");
}

console.log("Los textos ingresados, unidos con guion son: ", texto);
