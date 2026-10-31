// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari. 

// let number =  parseInt(prompt("Introdueix un número:"));
// if (number < 0) {
//     console.log("El número llegit és negatiu");
// }   
// else {
//     console.log("El número llegit és positiu");
// }   

// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

// let number = parseInt(prompt("Introdueix un número:"));
// if (number % 2 === 0) {
//     console.log("El número llegit és parell");
// }   
// else {
//     console.log("El número llegit és senar");
// }   

// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
// quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
// comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
// tercer.
 // 
// let number1 = parseInt(prompt("Introdueix el primer número:"));
// let number2 = parseInt(prompt("Introdueix el segon número:"));
// let number3 = parseInt(prompt("Introdueix el tercer número:")); 
// if (number1>number2 && number1>number3){
//     console.log("El número més gran és: " + number1);
// }   
// else if (number2>number1 && number2>number3){
//     console.log("El número més gran és: " + number2);
// }   
// else {
//     console.log("El número més gran és: " + number3);
// }

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament

// let quantitat = parseInt(prompt("Introdueix la quantitat a pagar:"));
// if (quantitat >= 30) {
//     console.log("El cost total és de 30€ (transport gratuït)"); 
// }
// else {
//     console.log("El cost total és de " + (quantitat + 4.95) + "€ (inclou 4.95€ de transport)");
// }

// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final.

let tipus = prompt("Vols un conus (c) o una terrina (t)?");
let sabor = prompt("Quin sabor vols? (Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles)");

// Comprovem que el tipus sigui vàlid I QUE el sabor estigui dins de la llista permessa
if ((tipus === "c" || tipus === "t") && 
    (sabor === "Vainilla" || sabor === "Xocolata" || sabor === "Turró" || 
     sabor === "Menta" || sabor === "Oreo" || sabor === "Crema" || 
     sabor === "Gerds" || sabor === "Ametlles")) {

    let preuBase;

    // Assignació de preu base sense l'interrogant
    if (tipus === "c") {
        preuBase = 3.45;
    } else {
        preuBase = 3.95;
    }

    let preuFinal = preuBase;  

    // Càlcul de suplements segons el sabor
    if (sabor === "Turró" || sabor === "Menta" || sabor === "Oreo") {
        preuFinal += 0.5;
    } 
    else if (sabor === "Crema" || sabor === "Gerds" || sabor === "Ametlles") {
        preuFinal += 1;
    } 
    else if (sabor === "Vainilla" || sabor === "Xocolata") {
        // No s'afegeix cap suplement
    }

    console.log("El preu final és: " + preuFinal + "€");

} else {
    // Si el tipus O el sabor no són vàlids, mostra exactament aquest missatge
    console.log("Error dades mal introduïdes");
}