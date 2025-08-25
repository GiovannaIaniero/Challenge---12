/*Año bisiesto
Solicitar un año y comprobar si es bisiesto.*/

let año;

año = parseInt(prompt("Ingrese año:"));

if ((año % 4 === 0)) {
    document.writeln(`${año} es un año bisiesto`);
} else {
    document.writeln(`${año} no es un año bisiesto`);
}

