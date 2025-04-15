import {dico} from "./dico.js";

let nbAttempt = 5;

//récupération des éléments
const hideWordDom = document.getElementById('hideWord')
const nbAttemptDom = document.getElementById('nbAttempt')


//tirer un mot aléatoire
function getRandomWord() {
    let index = Math.floor(Math.random() * dico.length)
    return dico[index]
}

//générer l'alphabet
function generateLetters(randomWord) {

    const lettersDom = document.getElementById('letters')

    for (let i = "A".charCodeAt(0); i < "Z".charCodeAt(0); i++) {

        //récupérer la lettre
        const letter = String.fromCharCode(i)
        //générer le bouton
        const button = document.createElement('button')
        button.innerText = letter
        button.value = letter
        button.addEventListener('click', function () {
            checkLetter(this, randomWord)
        })
        //ajout du bouton dans le dom
        lettersDom.append(button)
    }
}

function checkLetter(elem, randomWord) {
    console.log(elem)
    let value = elem.value

    let index = randomWord.indexOf(value)

    if (index === -1) {
        nbAttemptDom.innerText = --nbAttempt;

    }

    for(let index = 0; index < randomWord.length; index++){
        if(value === randomWord[index]){
            hideWordDom.innerText = hideWordDom.innerText.substring(0, index) + value + hideWordDom.innerText.substring(index + 1)
        }
    }

    checkWinOrLoose(randomWord)

}

function checkWinOrLoose(randomWord){

    //toutes les lettres sont trouvées et il reste au moins une tentative
    if(randomWord === hideWordDom.innerText && nbAttempt >= 0){
        alert("T'es un champion, champion !")
    }

    if(nbAttempt === 0 && randomWord !== hideWordDom.innerText){
        alert("T'es pas un champion, champion !")
    }
}

function displayRandomWord(hideWord) {
    hideWordDom.innerText = hideWord.replace(/\w/gi, "_")
}

function init() {
    let randomWord = getRandomWord()
    console.log(randomWord)
    generateLetters(randomWord)
    displayRandomWord(randomWord)
    document.getElementById('play').addEventListener('click', function (){
        window.location.reload()
    })
}
window.onload = init







