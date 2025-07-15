// ==================================
// 🎬 Personas segun su Generaciones
// ==================================
let personas = [];
recuperarPersonasDesdeLocalStorage();
agregarPersonasDeEjemploSiEsNecesario();

// ===========================
// 💾 Guardar en localStorage
// ===========================
function guardarEnLocalStorage() {
  const personasJSON = JSON.stringify(personas);
  localStorage.setItem("personas", personasJSON);
}

// ===========================
// 🧠 Cargar desde localStorage
// ===========================
function recuperarPersonasDesdeLocalStorage() {
  const personasRecuperadas = localStorage.getItem("personas");
  if (personasRecuperadas) {
    personas = JSON.parse(personasRecuperadas);
  } else {
    personas = [];
  }
}
function agregarPersonasDeEjemploSiEsNecesario() {
  if (personas.length === 0) {
    agregarPersona("Jacinto", 28, "53.456.789", "M", 80, 1.8, 1997);
    agregarPersona("Claudia", 48, "23.456.789", "F", 58, 1.65, 1977);
  }
}

// ===========================
// 🟢 CREATE - Agregar persona
// ===========================
function agregarPersona(nuevaPers) {
  // recuperar antes de modificar para evitar sobrescribir
  recuperarPersonasDesdeLocalStorage();

  // agregar la nueva persona al listado de personas
  personas.push(nuevaPers);
  guardarEnLocalStorage();
  console.log("✅ Persona agregada:", nuevaPers);
  alert(`${nuevaPers.nombre} ha sido agregada a la lista.`);
}

document
  .getElementById("formAgregarPersona")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nuevaPersona = {
      nombre: document.getElementById("nombreId").value,
      edad: parseInt(document.getElementById("edadId").value),
      DNI: document.getElementById("dniId").value,
      sexo: document.getElementById("sexoId").value,
      peso: parseFloat(document.getElementById("pesoId").value),
      altura: parseFloat(document.getElementById("alturaId").value),
      anioDeNacimiento: parseInt(document.getElementById("nacimientoId").value),
    };

    agregarPersona(nuevaPersona);
    this.reset();
  });

// ===========================
// 🔵 READ - Listar personas
// ===========================

function listarPersonas(individuo) {
  const listaPersonas = document.getElementById("listaDePersonas");
  listaPersonas.innerHTML = "";
  recuperarPersonasDesdeLocalStorage();

  individuo.forEach((persona, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1} - ${persona.nombre}, tiene ${
      persona.edad
    } anios, DNI: ${persona.DNI}, sexo: ${persona.sexo}, pesa: ${
      persona.peso
    } kg, Mide: ${persona.altura} metros, Anio de Nacimiento: ${
      persona.anioDeNacimiento
    }`;
    listaPersonas.appendChild(item);
  });
}
const btnListarPersonas = document.getElementById("btnListarPersonas");

btnListarPersonas.addEventListener("click", function () {
  listarPersonas(personas);
});

// Mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es
// el rasgo característico de esta generación.

function mostrarGeneracion(individuo) {
  recuperarPersonasDesdeLocalStorage();
  console.log("Generacion de cada personas:");

  individuo.forEach((persona, index) => {
    const { nombre, edad, DNI, sexo, peso, altura, anioDeNacimiento } = persona;

    let generacion = "";
    let rasgo = "";

    const anio = persona.anioDeNacimiento;
    if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "austeridad";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "ambición";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "obsesión por el éxito";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Millennials";
      rasgo = "frustración";
    } else if (anio >= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "irreverencia";
    } else {
      generacion = "Desconocida";
      rasgo = "rasgo no definido";
    }

    console.log(
      `${persona.nombre} pertenece a la ${generacion} y su rasgo característico es la ${rasgo}.`
    );
  });
}

function esMayorDeEdad(individuo) {
  recuperarPersonasDesdeLocalStorage();
  console.log("Personas mayores de Edad:");

  individuo.forEach((persona, index) => {
    const { nombre, edad, DNI, sexo, peso, altura, anioDeNacimiento } = persona;

    const mayor = persona.edad;
    if (mayor >= 18) {
      console.log(
        `${persona.nombre} de ${persona.edad} anios es mayor de edad.`
      );
    }
  });
}

//mostrarGeneracion(personas);
//esMayorDeEdad(personas);

// console.log(edad, nombre, direccion);

// // Creamos el objeto
// //const persona1 = new Persona("Lucía", 30, "12345678", "M", 60, 1.65, 1990);

// // DOM: Mostramos el mensaje en la página
// document.getElementById("resultado").innerText = persona.mostrarGeneracion();
