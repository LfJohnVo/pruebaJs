//recibo dato
var sign = prompt("Cual es tu nota?");
let mensaje = "";
//valido el dato
document.write("<h5>Respuesta 1</h5>");
document.write("Nota: " + sign + "<br>");
if (sign >= 0 && sign <= 2) {
    mensaje = "Muy deficiente";
    document.write("Resultado: Muy deficiente <br>");
} else if (sign >= 3 && sign <= 4) {
    mensaje = "Insuficiente";
    document.write("Resultado: Insuficiente <br>");
} else if (sign >= 5 && sign <= 6) {
    mensaje = "Suficiente";
    document.write("Resultado: Suficiente <br>");
} else if (sign >= 7 && sign <= 8) {
    mensaje = "Bien";
    document.write("Resultado: Bien <br>");
} else if (sign == 9) {
    mensaje = "Notable";
    document.write("Resultado: Notable <br>");
} else if (sign == 10) {
    mensaje = "Sobresaliente";
    document.write("Resultado: Sobresaliente <br>");
} else {
    document.write("Resultado: No es una nota valida <br>");
}
//genero un objeto con el dato
let objeto = {
    nombre: "JOHN",
    edad: 26,
    nota: sign,
    mensaje: mensaje,
};
//imprimo la info en pantalla
console.log("Respuesta 2");
console.log(objeto);
document.write("<hr>");
document.write("<h5>Respuesta 3</h5>");
document.write("<h6>Nombre: " + objeto.nombre + "</h6>");
document.write("<h6>Edad: " + objeto.edad + "</h6>");
document.write("<h6>Nota: " + objeto.nota + "</h6>");

let notaCasteada = parseFloat(sign);

alerta(notaCasteada);

function alerta(notaCasteada) {
    if (typeof notaCasteada === "number" || notaCasteada === "float") {
        if (notaCasteada >= 0 && notaCasteada <= 2) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Muy deficiente");
        } else if (notaCasteada >= 3 && notaCasteada <= 4) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Insuficiente");
        } else if (notaCasteada >= 5 && notaCasteada <= 6) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Suficiente");
        } else if (notaCasteada >= 7 && notaCasteada <= 8) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Bien");
        } else if (notaCasteada == 9) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Notable");
        } else if (notaCasteada == 10) {
            var res = calculo(notaCasteada);
            imprimeCinco(res);
            alert("Resultado 4: Sobresaliente");
        } else {
            alert("Resultado 4: No es una nota valida");
        }
    } else {
        alert("No es un numero");
    }
}

function calculo(variable) {
    let resultado = 5 * variable + (15) * (-3) / 3 + variable;

    return resultado;
}

function imprimeCinco(variable) {
    document.write("<hr>");
    document.write("<h5>Respuesta 5</h5>");
    document.write("<h6>Resultado: " + variable + "</h6>");
    if (variable == 0) {
        document.write("<h6>Es CERO</h6>");
    } else {
        if (impar(variable)) {
            document.write("<h6>Es Impar</h6>");
        } else {
            document.write("<h6>Es Par</h6>");
        }
    }
    document.write("<h6></h6>");
}

function impar(variable) {
    if (variable % 2 != 0) {
        return true;
    } else {
        return false;
    }
}