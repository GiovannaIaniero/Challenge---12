/*Tabla de multiplicar
Solicitar un número y mostrar su tabla del 1 al 10*/

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));


for (let i = 0; i <= 10; i++) {
    document.writeln(`${numero} * ${i} = ${numero * i} <br>`);
}