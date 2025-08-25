/*Número par o impar
 Comprobar si el número ingresado es par o impar.*/

let numero;

numero = parseInt(prompt('Ingrese un número:'));

if (numero % 2 === 0) {
    document.writeln('El número ingresado es par')
}
else {
    document.writeln('El número ingresado es impar')
}