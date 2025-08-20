/*Edad para votar
 Solicitar la edad del usuario y mostrar si puede votar*/

let edad;

edad = parseInt(prompt('Ingrese su edad:'));

if (edad >= 16 && edad < 18) {
    document.writeln('Puede votar pero no es obligatorio')
}
else if (edad >= 18 && edad <= 70) {
    document.writeln('Es Obligatorio votar')
} else if (edad > 70) {
    document.writeln('El voto es optativo')
}
else if (edad <16){
    document.writeln('No puede votar')
}
