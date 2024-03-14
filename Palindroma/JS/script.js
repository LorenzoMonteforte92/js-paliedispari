// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo la parola all'utente
let userWord = prompt(`inserisci una parola`)
//leggere la parola nel da sinistra verso destra
//leggerla da destra verso sinistra
// confronto se la parola scritta al contrario è uguale a quella inserita dall'utente

let palidrome = reverseWord (userWord);

console.log(palidrome)




// ----------------
//     FUNCTIONS
// ----------------

function reverseWord (word){
    
    let wordIndex = ``
    for(let i = word.length - 1; i >= 0; i--) {
        wordIndex += word[i]
    }
    return wordIndex
}