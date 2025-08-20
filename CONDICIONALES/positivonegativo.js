/*Número positivo o negativo
Escribir un programa que determine si un número ingresado por el usuario es
positivo, negativo o cero*/

let numero;

numero = parseInt(prompt('Ingrese un número:'));

if (numero > 0) {
    document.writeln('Es un número positivo')
}
else if (numero < 0) {
    document.writeln('Es un número negativo')
} else if (numero === 0) {
    document.writeln('El número ingresado es cero')
}

