// // 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.

let number = parseInt(prompt("Introdueix un número:"));
if (number % 2 === 0) {
    console.log("El número llegit és parell");
} 
if (number % 2 !== 0) {
    console.log("El número llegit és senar");
}
