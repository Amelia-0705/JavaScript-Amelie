
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que 
// ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje


let edad = parseInt(prompt("Ingrese su edad"));

if (edad  >= 18) {
    console.log("Tienes edad para conducir");
} else {
     console.log("Aun no tienes edad para conducir");
    
}