
// //Ingresar Socios A sanitos
// document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion );
// document.getElementById("btn__registrarse").addEventListener("click", register);
// window.addEventListener("resize", anchopPagina);

// //declarar variables
// let contenedor_login_register = document.querySelector(".contenedor__login-register");
// let formulario_login = document.querySelector(".formulario__login");
// let formulario_register = document.querySelector(".formulario__register");
// let cajaTrasera_login = document.querySelector(".caja__trasera__login");
// let cajaTrasera_register = document.querySelector(".caja__trasera__register");


// function anchopPagina(){
//     if (window,innerWidth > 850) {
//         cajaTrasera_login.style.display = "block";
//         cajaTrasera_register.style.display = "block";
// }else{
//     cajaTrasera_register.style.display = "block";
//     cajaTrasera_register.style.opacity = "1";
//     cajaTrasera_login.style.display = "none";
//     formulario_login.style.display = "block";
//     formulario_register.style.display = "none";
//     contenedor_login_register.style.left = "0px";
// }
// }
// anchopPagina();

// function iniciarSesion () {
//     if(window.innerWidth > 850){
//     formulario_register.style.display = "none";
//     contenedor_login_register.style.left = "10px";
//     formulario_login.style.display = "block";
//     cajaTrasera_register.style.opacity = "1";
//     cajaTrasera_login.style.opacity = "0";
// }else{
//     formulario_register.style.display = "none";
//     contenedor_login_register.style.left = "0px";
//     formulario_login.style.display = "block";
//     cajaTrasera_register.style.display = "block";
//     cajaTrasera_login.style.display = "none";
// }
// }
// function register () {
//     if(window.innerWidth > 850){
//     formulario_register.style.display = "block";
//     contenedor_login_register.style.left = "410px";
//     formulario_login.style.display = "none";
//     cajaTrasera_register.style.opacity = "0";
//     cajaTrasera_login.style.opacity = "1";
// }else{
//     formulario_register.style.display = "block";
//     contenedor_login_register.style.left = "0px";
//     formulario_login.style.display = "none";
//     cajaTrasera_register.style.display = "none";
//     cajaTrasera_login.style.opacity = "1";
// }
// }
// //libreria
// let input = $( ":button" ).addClass( "marked" );
// $( "div" ).text( "For this type jQuery found " + input.length + "." );
// // Prevent the form from submitting
// $( "form" ).submit(function( event ) {
//   event.preventDefault();
// });



// class Socio {
//     constructor(nombre, apellido, dni) {
//         this.nombre = nombre;
//         this.apellido = apellido;

       
//     }
// }
// let listaSocio =[];
// const crearSocios = () => {
//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value;
   
    
// let nuevoSocio = new Socio(nombre, apellido, );
// listaSocio.push(nuevoSocio);
// return nuevoSocio;
// }
// //eventos
// const ingrese = document.querySelector("#ingrese");
// const ingrese1 = document.querySelector("#ingrese1");
// const boton = document.querySelector("#btn");
// const text1 = document.querySelector("#texto1");
// const text = document.querySelector("#texto");

// //evento logica
// text.addEventListener("change",()=>{
//     console.log(`su nombre ingresado es ${text.value}`);

//   })
// text1.addEventListener("change",()=>{
//     console.log(`su apellido ingresado es ${text1.value}`);

//   })
// //submint
//   const formulario = document.querySelector("form");
//   formulario.addEventListener("submit", ()=> {
//     console.log("se envio el fomulario")
//   })

// //reservar turno 
// let lista = [];
// function agregarTarea (reserva){
//     lista.push(reserva);
//     console.log(lista);
// }
// function sacarTarea(){
//     lista.shift()
//     console.log(lista);
// }
// function buscarTarea(){
//     lista.find()
//     console.log(lista);
// }
// let toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
// while (toDo != 4) {
//     if (toDo === 1) {
//       let newReserva = prompt("Ingresar su nombre");
//       agregarTarea(newReserva);
//       toDo = alert("Su turno fue agendado");
//       toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Quiere reservar otro turno? \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));
    
//     } else if (toDo === 2) {
//         lista.forEach(el => {alert(`${lista} tiene un turno registrado`)})
//           toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
//         }
    
//     else if (toDo === 3) {
//         let newReserva = prompt("Ingrese su nombre como reservo")
//     sacarTarea(newReserva);
//     toDo = alert("su turno fue cancelado");
//     toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 - Turno \n 3 - Eliminar turno \n 4 - esc"));

//     } else  {
//         alert("Dato erroneo, intente nuevamente"),
//         toDo = parseInt(prompt("Bienvenidos a Sanitos! \n 1 - Reservar Turno \n 2 -  Turno \n 3 - Eliminar turno \n 4 - esc"));
//     }
// }
//     alert("Gracias por su visita, vuelva pronto");
// let reservarTurno = document.querySelectorAll(".btn");
// console.log(reservarTurno);
// for(let i=0; i < reservarTurno.length; i++) {
//     let boton = reservarTurno[i];
//     boton.addEventListener("click", agarrarTurno);
// }
// function agarrarTurno(e) {
//     let boton = e.target;
//     let padre = boton.parentElement;
//     console.log(padre);
// }
//fetch
const boton = document.querySelector("#boton");
const contenedor = document.querySelector("#fetch");

const ingrese = ()=>{
    fetch ("./turnos.json")
    .then(response => response.json())
    .then(result => {
        result.forEach(persona => {
            contenedor.innerHTML += `
            <div>
            <h3>${persona.especialidad} </h3>
            <p>${persona.doctor}</p>
            <p>${persona.dia}</p>
            <p>${persona.turno}</p>

            </div>
            `
        })
    })
}

boton.onclick = ()=> {
    ingrese();
}




