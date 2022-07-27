
//Ingresar Socios A sanitos
class Socio {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
       
    }
}
let listaSocio =[];
const crearSocios = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    
let nuevoSocio = new Socio(nombre, apellido, dni, );
listaSocio.push(nuevoSocio);
return nuevoSocio;
}
//eventos
const ingrese = document.querySelector("#ingrese");
const ingrese1 = document.querySelector("#ingrese1");
const boton = document.querySelector("#btn");
const text1 = document.querySelector("#texto1");
const text = document.querySelector("#texto");

//evento logica
text.addEventListener("change",()=>{
    console.log(`su nombre ingresado es ${text.value}`);

  })
text1.addEventListener("change",()=>{
    console.log(`su apellido ingresado es ${text1.value}`);

  })
//submint
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", ()=> {
    console.log("se envio el fomulario")
  })

//reservar turno 
let lista = [];
function agregarTarea (reserva){
    lista.push(reserva);
    console.log(lista);
}
function sacarTarea(){
    lista.shift()
    console.log(lista);
}
function buscarTarea(){
    lista.find()
    console.log(lista);
}
let toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
while (toDo != 4) {
    if (toDo === 1) {
      let newReserva = prompt("Ingresar su nombre");
      agregarTarea(newReserva);
      toDo = alert("Su turno fue agendado");
      toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Quiere reservar otro turno? \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
    
    } else if (toDo === 2) {
        lista.forEach(el => {alert(`${lista} tiene un turno registrado`)})
          toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
        }
    
    else if (toDo === 3) {
        let newReserva = prompt("Ingrese su nombre como reservo")
    sacarTarea(newReserva);
    toDo = alert("su turno fue cancelado");
    toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));

    } else  {
        alert("Dato erroneo, intente nuevamente"),
        toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
    }
}
    alert("Gracias por su visita, vuelva pronto");










