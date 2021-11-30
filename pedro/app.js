let nota = 7;

if (nota >= 0 && nota <= 10) {
    if (nota <= 2) {
        console.log("Muy deficiente");
    } else if (nota <= 4) {
        console.log("Insuficiete");
    } else if (nota <= 6) {
        console.log("Suficiente");
    } else if (nota <= 8) {
        console.log("Bien");
    } else if (nota <= 9) {
        console.log("Notable");
    } else if ((nota = 10)) {
        console.log("Sobresaliente");
    }
} else {
    console.log("Nota erronea");
}

// segundo ejercicio

//objeto
console.log({
    nombre: "Andres",
    edad: 25,
    calificacion: nota,
    "mensaje de calificacion": "Bien",
});

//Ejercicio 3
document.write("Pedro Garcia, 25 años" + ",  calificacion " + nota);

//Ejercicio 4

function alerta(nota) {
    console.error(nota);
}

alerta(nota);

//Ejercicio 5

// let Formula = ((5*nota)+(15*(−3))/3)+nota;

// console.log(Formula);