/*let nombre = prompt("Ingrese su nombre");

var mayoriaDeEdad = 18;


while (nombre != "salir") {

    alert("Hola " + nombre);
    //let entrada = "salir"//
    edad = prompt("Para acceder debe ingresar su edad en años");

    if (edad < mayoriaDeEdad) {
        alert("Cuidado, debe ser mayor de 18 años para adquirir nuestros productos");
        nombre = "salir" //=> en caso de ser menor la persona, redirecciono a la pagina de contacto, para evitar la compra
        window.location.replace("http://127.0.0.1:5500/contact.html");
    }
    else {
        break;
    }
}*/


/*
function esFechaValida(dia, mes, año) {
    var nvaFecha;
    mes = mes - 1;

    nvaFecha = new Date(año, mes, dia);

    return ((dia == nvaFecha.getDate()) && (mes == nvaFecha.getMonth()) && (año == nvaFecha.getFullYear()))
}

function validarFecha(fecha) {

    var patron = new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

    if (fecha.search(patron) == 0) {
        var values = fecha.split("-");

        if (esFechaValida(values[2], values[1], values[0])) {
            return true;
        }
    }

    return false;
}


function getEdad(dateString) {
    //var hoy = new Date()

    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    if (validarFecha(fecha) == true) {

        var values = fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var año = values[0];

        var fecha_hoy = new Date();
        var hoy_año = fecha_hoy.getFullYear();
        var hoy_mes = fecha_hoy.getMonth();
        var hoy_dia = fecha_hoy.getDate();

        var edad = (hoy_año + 1900) - año;
        if (hoy_mes < mes) {
            edad--;
        }
        if ((mes == hoy_mes) && (hoy_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        var meses = 0;
        if (hoy_mes > mes) {
            meses = hoy_mes - mes;
        }
        if (hoy_mes < mes) {
            meses = 12 - (mes - hoy_mes);
        }
        if (hoy_mes == mes && dia > hoy_dia {
            meses = 11;
        }


        var dias = 0;
        if (hoy_dia > dia) {
            dias = hoy_dia - dia;
        }
        if (hoy_dia < dia) {
            ultimoDiaMes = new Date(hoy_año, hoy_mes, 0);
            dias = ultimoDiaMes.getDate() - (dia - hoy_dia);
        }

        document.getElementById("texto__edad").innerHTML = "Tienes " + edad + " años.";
    }
    else {
        document.getElementById("texto__edad").innerHTML = "La fecha " + fecha + " es incorrecta";
    }

}
*/

/*
function getEdad2(dateString) {

    //let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }
    return edad
}*/
