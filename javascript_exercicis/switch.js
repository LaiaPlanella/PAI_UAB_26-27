// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
// de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon
// let mes = parseInt(prompt("Introdueix el número del mes (1-12):"));

// switch (mes) {
//     case 1:
//         console.log("Gener");
//         break;
//     case 2:
//         console.log("Febrer");
//         break;
//     case 3:
//         console.log("Març");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Maig");
//         break;
//     case 6:
//         console.log("Juny");
//         break;
//     case 7:
//         console.log("Juliol");
//         break;
//     case 8:
//         console.log("Agost");
//         break;
//     case 9:
//         console.log("Setembre");
//         break;
//     case 10:
//         console.log("Octubre");
//         break;
//     case 11:
//         console.log("Novembre");
//         break;
//     case 12:
//         console.log("Desembre");
//         break;
//     default:
//         console.log("Número de mes no vàlid. Si us plau, introdueix un número entre 1 i 12.");
// }

// 15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”.
// Si totes les dades són correctes, escriurà el preu final

let tipus = prompt("Vols un conus (c) o una terrina (t)?");
let sabor = prompt("Quin sabor vols? (Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles)");

if (tipus === "c" || tipus === "t") {
    
    let preuBase;
    switch (tipus) {
        case "c":
            preuBase = 3.45;
            break;
        case "t":
            preuBase = 3.95;
            break;
    }

    let preuFinal = preuBase;  
    switch (sabor) {
        case "Turró":
        case "Menta":
        case "Oreo":
            preuFinal += 0.5;
            break;
            
        case "Crema":
        case "Gerds":
        case "Ametlles":
            preuFinal += 1;
            break;
            
        case "Vainilla":
        case "Xocolata":
            break;
            
        default:
            tipus = "error"; 
            break;
    }
    if (tipus === "error") {
        console.log("Error dades mal introduïdes");
    } else {
        console.log("El preu final és: " + preuFinal + "€");
    }

} else {
    console.log("Error dades mal introduïdes");
}