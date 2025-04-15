//fonction de type objet
function Singer(name, age, songs){
    this.name = name
    this.age = age
    this.songs = songs
    this.sing =  function () {
        return `${this.name} chante ${this.songs[Math.floor(Math.random() * this.songs.length)]}`
    }
}

const johnny = new Singer("Jean-Phi", 75, ["Allumer le feu", "L'envie", "Le pénitencier"])
const danny = new Singer("Daniel", 45, ["L'aziza", "Le chanteur", "Vivre ou survivrel"])

console.log(johnny.sing())

johnny.fiancee = "Laetitia";
johnny.children = [
    {name : "Jade"},
    {name : "Milo"},
]

Singer.prototype.instrument = "Guitare"
danny.instrument ="Piano"
Singer.prototype.instrument = "Batterie"

console.log(johnny)
console.log(danny)
