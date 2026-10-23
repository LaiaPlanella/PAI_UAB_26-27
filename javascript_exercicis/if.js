// // 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.

// let number = parseInt(prompt("Introdueix un número:"));
// if (number % 2 === 0) {
//     console.log("El número llegit és parell");
// } 
// if (number % 2 !== 0) {
//     console.log("El número llegit és senar");
// }

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let number1 = parseInt(prompt("Introdueix el primer número:"));
// let number2 = parseInt(prompt("Introdueix el segon número:"));
// if (number1>number2){
//     console.log("El número més gran és: " + number1);
// }
// if (number2>number1){
//     console.log("El número més gran és: " + number2);   
// }

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran.

// let number1 = parseInt(prompt("Introdueix el primer número:"));
// let number2 = parseInt(prompt("Introdueix el segon número:"));
// let number3 = parseInt(prompt("Introdueix el tercer número:")); 
// if (number1>number2 && number1>number3){
//     console.log("El número més gran és: " + number1);
// }   
// if (number2>number1 && number2>number3){
//     console.log("El número més gran és: " + number2);
// }   
// if (number3>number1 && number3>number2){
//     console.log("El número més gran és: " + number3);
// }   
// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
let num_mes = parseInt(prompt("Introdueix un número de mes (1-12):"));
if (num_mes == 1) {
    console.log("Gener");
}
if (num_mes == 2) {
    console.log("Febrer");
}   
if (num_mes == 3) {
    console.log("Març");
}
if (num_mes == 4) {
    console.log("Abril");
}       
if (num_mes == 5) {
    console.log("Maig");
}   
if (num_mes == 6) {
    console.log("Juny");
}   
if (num_mes == 7) {
    console.log("Juliol");
}

if (num_mes == 8) {
    console.log("Agost");
}   
if (num_mes == 9) {
    console.log("Setembre");
}
if (num_mes == 10) {
    console.log("Octubre");
}   
if (num_mes == 11) {
    console.log("Novembre");
}
if (num_mes == 12) {
    console.log("Desembre");
}