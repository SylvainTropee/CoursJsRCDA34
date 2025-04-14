const cities = ["Agadir", "Nice", "Montréal", "Lima"]

let citySelect = document.getElementById('cities')

cities.forEach(function (value) {

    //création d'une option
    let option = document.createElement('option')
    option.value = value.toLowerCase()
    option.innerText = value

    citySelect.append(option)
})

citySelect.addEventListener('change',  () => {

    console.log(this)
    let p = document.createElement('p')
    p.innerText = `La ville est ${citySelect.value}`;
    document.body.append(p)
})




