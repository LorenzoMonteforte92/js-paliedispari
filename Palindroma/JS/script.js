// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo la parola all'utente
let userWord = prompt(`inserisci una parola`)
//leggere la parola nel da sinistra verso destra
//leggerla da destra verso sinistra
// confronto se la parola scritta al contrario è uguale a quella inserita dall'utente

let palidrome = isWordPalindrome (userWord);

console.log(palidrome)




// ----------------
//     FUNCTIONS
// ----------------

function isWordPalindrome (word){
    
    let wordIndex = ``
    for(let i = 0; i < word.length; i++) {
        wordIndex += word[i]
    }
    return wordIndex
}