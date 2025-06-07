//Adivina el nro secreto entre 1 y 10. El bucle continua hasta q se acierta. Mostrar el total de veces intentada

const nroSecreto = Math.floor((Math.random())*10 + 1);

let intentos = 0;
let nroUsuario;

while(nroSecreto !== nroUsuario){
    nroUsuario =  parseInt(prompt("Adivina el nro secreto"));
intentos++;
if(nroSecreto !== nroUsuario){
    console.log("No es el nro. Sigue participando");
}
}
console.log(nroSecreto);
console.log("Genial!!, adivinaste en el nro de intento: ", intentos);
