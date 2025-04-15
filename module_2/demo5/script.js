//séparateur numérique
let number = 100_000_000
console.log(number)

//gestion de la nullité
let singer = {
    name: "Jean-Jacques",
    songs : ["la-bas", "les violons", "un matin"]
}

console.log(singer.name)
console.log(singer.songs?.length ?? 19)

//spread
let jjSongs = ["la-bas", "les violons", "un matin"]
let johnnySongs = ["Allumer le feu", "L'envie", "Le pénitencier"]

let songs3 = [...jjSongs, ...johnnySongs]
let songs2 = jjSongs.push(...johnnySongs)

console.log(songs3)
console.log(songs2)

//destructuration
const {name, songs} = singer

console.log(name)
console.log(songs)





