// 📝 Ejercicio 1:
// Crear un objeto llamado "auto" con las propiedades: marca, modelo, anio, y color.
// Luego, mostrarlo por consola.

// 📝 Ejercicio 2 y 3:
// A partir del objeto "auto", agregarle una propiedad "dueño" y modificar el color.
// Mostrar el objeto actualizado por consola.

// 📝 Ejercicio 3:
// Crear una función que reciba un objeto y recorra todas sus propiedades con for...in,
// imprimiendo: "La propiedad X vale Y".

const auto = {
  marca: "Toyota",
  modelo: "Etios",
  anio: "2015",
  color: "gris",
};

auto.duenio = "Juan Perez";
auto.color = "amarillo";

function detalleDeObjeto(objeto) {
  for (let clave in objeto) {
    //clave - valor
    console.log("La propiedad ", clave + " vale " + objeto[clave]);
  }
}

detalleDeObjeto(auto);
