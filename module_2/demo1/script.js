//création d'objet simple
const johnny = {
    name: "Jean-Phi",
    age: 75,
    songs: ["Allumer le feu", "L'envie", "Le pénitencier"],
    sing: function () {
        return `${this.name} chante ${this.songs[Math.floor(Math.random() * this.songs.length)]}`
    }
}

console.log(johnny.sing())

johnny.fiancee = "Laetitia";
johnny.children = [
    {name : "Jade"},
    {name : "Milo"},
]

console.table(johnny)
