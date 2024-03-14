// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo la parola all'utente
let userWord = prompt(`inserisci una parola`)

console.log(`parola inserita: ${userWord}`)

//leggerla da destra verso sinistra
let wordInReverse = reverseWord (userWord);

console.log(`parola al contrario: ${wordInReverse}`)

// confronto se la parola scritta al contrario è uguale a quella inserita dall'utente
let userMessage
if(wordInReverse === userWord) {
    userMessage = `La parola è palindroma`
} else {
    userMessage = `La parola non è palindroma`
}

console.log(userMessage)





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