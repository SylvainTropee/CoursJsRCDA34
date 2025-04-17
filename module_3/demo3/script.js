async function callApi() {
    let response =  fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {method: 'GET'})
    //ne jamais await plusieurs promise à la suite, mais utilisé les méthodes all
    let response2 =  fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {method: 'GET'})
    //return await Promise.all([response, response2])

    if(response.ok){
        return response.json()
    }
}

async function displayPikachu() {

    let data = await callApi()

    console.log(data)
    let h1 = document.createElement('h1')
    h1.innerText = data.name

    let img = document.createElement('img')
    img.src = data.sprites.other.home.front_default

    document.body.append(h1)
    document.body.append(img)
}

displayPikachu()


async function takeALotOfTime() {

    let i = 0
    while (i < 10_000_000_000) {
        i++
    }

    console.log("fin du programme qui prend du temps")
}
//
// console.log("coucou")
// takeALotOfTime().then(() => console.log('coucou'))
// console.log("bye bye")

























