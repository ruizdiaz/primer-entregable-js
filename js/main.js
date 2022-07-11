//reservar turno 
function edad() {
    let tuEdad = parseInt(prompt("Ingresa la edad del paciente"));
    if (tuEdad < 18) {
        alert("Paciente pediatrico");
    } else {
        alert("No es paciente pediatrico");
    }
}
edad()


let turnos = parseInt(prompt(`Ingrese cuantos turnos quiere`));//Defino la cantidad de turnos
while (turnos > 0) {
    alert(`Pediatras disponibles: \n fernandez \n virgile \n garcia`);//me dice los pediatras disponibles

    let pediatra = prompt("Ingrese nombre del Pediatra");//elijo pediatra
    let ingresarNombre = prompt("Ingresar nombre");// pongo mi nombre



    // lista de pediatra que se encuentran disponibles
    switch(pediatra) {
        case "fernandez":
        alert ("su turno fue agendado con fernandez");
        turnos--;
        break;
        case "virgile":
        alert ("su turno fue agendado con virgile");
        turnos--;
        break;
        case "garcia":
        alert ("su turno fue agendado con garcia");
        turnos--;
        break;
        default:
            alert(`No se encuentra ${ pediatra}`);
        break;
    }
}