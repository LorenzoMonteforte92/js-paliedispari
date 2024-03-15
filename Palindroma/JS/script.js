// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo la parola all'utente
let userWord = prompt(`inserisci una parola`)

console.log(`parola inserita: ${userWord}`)

//leggerla da destra verso sinistra

// confronto se la parola scritta al contrario è uguale a quella inserita dall'utente

let IsPalindrome = isWordPalindrome (userWord)

alert(IsPalindrome)





// ----------------
//     FUNCTIONS
// ----------------

function isWordPalindrome (word){
    
    let wordIndex = ``
    for(let i = word.length - 1; i >= 0; i--) {
        wordIndex += word[i]
    }
    
    let userMessage
    if(wordIndex === userWord) {
        userMessage = `La parola è palindroma`
    } else {
        userMessage = `La parola non è palindroma`
    }

    return userMessage
}