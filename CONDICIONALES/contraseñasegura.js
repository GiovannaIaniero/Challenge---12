/*Contraseña segura
Comparar una contraseña ingresada con una contraseña guardada. Mostrar
mensaje si coinciden o no.*/

let ingresada = 123;
let guardada = 12345;

ingresada = parseInt(prompt('Contraseña ingresada:'));
guardada = parseInt(prompt('Contraseña guardad'));

if (ingresada === guardada) {
    document.writeln('Las contraseñas coinciden.')
} else {
    document.writeln('Las contraseñas no coinciden.')
}














