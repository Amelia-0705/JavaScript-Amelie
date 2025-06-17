let edad = Number(prompt("Ingrese su edad"));

if (!isNaN(edad)) {
    console.log(edad >= 18 ? "Tienes edad para conducir" : "Aún no tienes edad para conducir");
} else {
    console.log("Edad no válida");
}
