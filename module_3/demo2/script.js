let pikachu;
let response = fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {method: 'GET'})
    .then((response) => response.json())
    .then(data => {
        pikachu = data
        console.log(data)
        //let pikachu = JSON.parse(data) //JSON.stringify()
        //console.log(pikachu)

        let h1 = document.createElement('h1')
        h1.innerText = data.name

        let img = document.createElement('img')
        img.src = data.sprites.other.home.front_default

        document.body.append(h1)
        document.body.append(img)
    })

console.log(response)
console.log(pikachu)