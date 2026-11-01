// 18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la
// instrucció prompt), 10 números, i ens digui quin és el més gran.

// let comptador = 0;
// let maxim; 

// do {
//     let numero = parseInt(prompt("Introdueix un número (" + (comptador + 1) + "/10):"));

//     if (comptador === 0) {
//         maxim = numero;
//     } 

//     else if (numero > maxim) {
//         maxim = numero;
//     }

//     comptador++;

// } while (comptador < 10); 

// console.log("El número més gran de tots és: " + maxim);

// 18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és
// primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha
// algun número entre 1 i N que sigui divisor de N).

// let N = parseInt(prompt("Introdueix un número N per comprovar si és primer:"));
// let esPrimer = true; 

// if (N <= 1) {
//     esPrimer = false;
// } 

// else if (N === 2) {
//     esPrimer = true;
// } 

// else {
//     let i = 2; 
    
//     do {

//         if (N % i === 0) {
//             esPrimer = false;
//             break; 
//         }
//         i++;
//     } while (i < N); 
// }


// if (esPrimer) {
//     console.log("El número " + N + " ÉS primer.");
// } else {
//     console.log("El número " + N + " NO és primer.");
// }

// 18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N,
// escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el
// que passa si N < 1.

let N = parseInt(prompt("Introdueix el numero:"));
let i = N;
do {
    console.log(i);
    i--;
}
while (i >= 1);