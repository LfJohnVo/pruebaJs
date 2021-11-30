var calificacion = parseInt(prompt("Cuál es tu calificación?"));
// var objeto = {nombre:"omar", edad:32, calificacion:calificacion, mensaje:mensaje_salida }
//var mensaje = "";//

if (calificacion > 0 && calificacion <= 10) {
    var objeto = {
        nombre: "omar",
        edad: 32,
        calificacion: calificacion,
        mensaje_salida: mensaje_salida,
    };
    var mensaje_salida;
    if (calificacion <= 2) {
        mensaje_salida = "Muy deficiente";
        console.log(mensaje_salida);
    } else if (calificacion < 5) {
        mensaje_salida = "Insuficiente";
        alert(mensaje_salida);
    } else if (calificacion < 6) {
        mensaje_salida = "Suficiente";
        alert(mensaje_salida);
    } else if (calificacion < 7) {
        mensaje_salida = "Bien";
        alert(mensaje_salida);
    } else if (calificacion < 9) {
        mensaje_salida = "Notable";
        alert(mensaje_salida);
    } else if (calificacion >= 9) {
        mensaje_salida = "Sobresaliente";
        alert(mensaje_salida);
    }
} else {
    mensaje_salida = "Calificacion erronea";
    alert(mensaje_salida);
}

console.log(objeto);
document.write("< h1 >" + objeto.nombre + "< /h1>");
//document.write(objeto.edad);
//document.write(objeto.calificacion);
//document.write(objeto.mensaje_salida);