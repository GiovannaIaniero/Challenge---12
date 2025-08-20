/*Mayor de tres números
 Pedir tres números al usuario y mostrar cuál es el mayor*/

let numero1;
let numero2;
let numero3;

numero1 = parseInt(prompt('Ingrese el primer número'));
numero2 = parseInt(prompt('Ingrese el segundo número'));
numero3 = parseInt(prompt('Ingrese el tercer número'));

if (numero1 >= numero2 && numero1 >= numero3) {
    document.writeln('El primer numero es mayor')
} else if (numero2 >= numero1 && numero2 >= numero3) {
    document.writeln('El segundo numero es el mayor')
} else {
    document.writeln('El tercer numero es el mayor ')
}

