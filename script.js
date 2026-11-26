function enviar() {

    let nombre = document.getElementById("nombre").value;
    let apellidoPaterno = document.getElementById("apellidoPaterno").value;
    let apellidoMaterno = document.getElementById("apellidoMaterno").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    alert("Registro de Usuario");

    alert("Nombre: " + nombre);
    alert("Apellido Paterno: " + apellidoPaterno);
    alert("Apellido Materno: " + apellidoMaterno);
    alert("Telefono: " + telefono);
    alert("Direccion: " + direccion);
    alert("Correo Electronico: " + correo);

}