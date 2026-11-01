// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”
// for (let i = 0; i < 10; i++) {
//     console.log("Estem fent bucles");
// }   

// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.

// for (let i = 5; i <= 20; i++) {
//     console.log(i);
// }   

// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M)
// calculi la suma de tots els números entre N i M (ambdós inclosos)

// let N = parseInt(prompt("Introdueix el primer número (N):"));
// let M = parseInt(prompt("Introdueix el segon número (M):"));
// let suma = 0;

// for (let i = N; i <= M; i++) {
//     suma += i;
// }

//  console.log("La suma dels números entre " + N + " i " + M + " és: " + suma)

// 16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números
// parells entre 2 i N.

// let N = parseInt(prompt("Introdueix el número (N):"));
// let suma = 0;
// for (let i=2; i <= N; i ++){
//     if (i % 2 === 0){
//         suma += i;
//     }
// }
// console.log("La suma dels números parells entre 2 i " + N + " és: " + suma)

// 16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de
// multiplicar de N

// let N = parseInt(prompt("Introdueix el número (N):"));
// for (let i=0; i<= 10; i++){
//     console.log(N*i)

// }
// 16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números
// de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1

// let N = parseInt(prompt("Introdueix el número (N):"));
// for (let i = N; i >= 1; i--) {
//     console.log(i);
// }

// // 16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)
// let N = parseInt(prompt("Introdueix el número (N):"));
// for (let i = 0; i < N; i++) {
//     console.log("*");
// }

// 16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el
// número introduït sigui 5).

// let N = parseInt(prompt("Introdueix el número (N):"));
// let linia = "";

// for (let i = 1; i <= N; i++) {
//     linia += "*"; 
//     console.log(linia);
// }

// 16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la
// següent:
// Si N ← 2 i M ← 5
// Sortida per consola:
// 2 22 222 2222 22222
// La suma de la sèrie és:24690

// Demanem N i M a l'usuari (fem servir parseInt per assegurar-nos que ho tracta com a números)
let N = parseInt(prompt("Introdueix el número N (el dígit que es repetirà):"));
let M = parseInt(prompt("Introdueix el número M (el nombre de vegades):"));

let elementActual = ""; 
let serieStr = "";      
let suma = 0;           

for (let i = 1; i <= M; i++) {

    elementActual += N; 

    serieStr += elementActual + " ";

    suma += Number(elementActual);
}

console.log(serieStr.trim());
console.log("La suma de la sèrie és: " + suma);