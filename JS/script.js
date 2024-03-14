// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedere all'utente di scegliere pari o dispari
let userChoiche
//valido i prompt 
while(userChoiche != "pari" && userChoiche != "dispari"){
    userChoiche = prompt(`Scegli pari o dispari`);
}
console.log( `scelta utente: ` + userChoiche);
//chiedere di scegliere un numero da uno a 5
let userNumber = parseInt(prompt(`Scegli un numero da 1 a 5`));
//valido i prompt
while(userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt(`Scegli un numero da 1 a 5`));
}
console.log(`numero utente: ` + userNumber);

//numero random del pc
let cpuNumber = getRndInteger(1, 5);
console.log(`numero cpu: ` + cpuNumber);

//sommo numero utente e numero cpu
sum = cpuNumber + userNumber
console.log(`somma numeri: ` + sum);

//stampo se la somma è pari o dispari
let isSumOddEven = isEvenOrOdd (sum);
console.log(`la somma è: ` + isSumOddEven);

let gameResult 
if(isSumOddEven === userChoiche){
    gameResult = `Congratulazioni hai vinto`
} else {
    gameResult = `mi spiace hai perso`
}
console.log(gameResult);


// ----------------
//     FUNCTIONS
// ----------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function isEvenOrOdd (number){
    let oddEven 
    if(number % 2 === 0) {
        oddEven = `pari`
    } else{
        oddEven = `dispari`
    };

    return oddEven;
}