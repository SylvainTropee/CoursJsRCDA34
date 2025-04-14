//déclarations
let yugi = "Yugi"
let yugiPv = 4400

let yugiCharacters = ["Yugi", "Yami", "Joey", "Kaiba"]

console.log(typeof yugi)
console.log(typeof yugiPv)

for (const yugiCharacter of yugiCharacters) {
    console.log(yugiCharacter)
}

//fonctions
console.log((function getCard(name) {
    return "Dragon bleu aux yeux bleus " + name
})("Yugi"))

//fonction anonyme
const getCard2 = function (){
    return "Magicien des ténèbres !"
}

console.log(typeof getCard2)
console.log(getCard2)
console.log(getCard2())

//fonction fléchée (expression lambda)
const getCard3 = () => "Exodia le maudit"
const getCard4 = () => {
    //d'autres lignes de code
    return "Kuribo ailé"
}

console.log(getCard3())





