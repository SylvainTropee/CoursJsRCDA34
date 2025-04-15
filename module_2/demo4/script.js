//class ES6
class Singer{
    #name
    age
    constructor(name, songs, age = 50) {
        this.#name = name
        this.age = age
        this.songs = songs
    }

    get name(){
        return this.#name
    }
    set name(value){
        this.#name = value
    }

    sing(){
        return `${this.#name} chante ${this.songs[Math.floor(Math.random() * this.songs.length)]}`
    }

}


const johnny = new Singer("Jean-Phi",  ["Allumer le feu", "L'envie", "Le pénitencier"], 75)
const danny = new Singer("Daniel", ["L'aziza", "Le chanteur", "Vivre ou survivrel"])

console.log(johnny.sing())

johnny.fiancee = "Laetitia";
johnny.children = [
    {name : "Jade"},
    {name : "Milo"},
]

Singer.prototype.instrument = "Guitare"
danny.instrument ="Piano"
Singer.prototype.instrument = "Batterie"

console.log(johnny.name = "Michel")
console.log(johnny)
console.log(danny)
