let selectProvince = document.getElementById('dep')
let selectCity = document.getElementById('cities')

async function callApi(url) {
    let response = await fetch(url)
    if (response.ok) {
        return response.json()
    }
}

async function getProvinces() {

    let data = await callApi('https://www.odwb.be/api/explore/v2.1/catalog/datasets/provincesprovincies-belgium/records?limit=20')
    console.log(data)

    createOptionsForProvince(data.results)
}

function createOptionsForProvince(provinces) {

    provinces.forEach(function (val) {

        let option = document.createElement('option')
        option.value = val.prov_code[0]
        option.innerText = val.prov_name_fr[0]

        selectProvince.append(option)
    })
}


async function getCities() {

    let data = await callApi(`https://www.odwb.be/api/explore/v2.1/catalog/datasets/communesgemeente-belgium/records?where=prov_code=${selectProvince.value}`)
    console.log(data)
    createOptionsForCities(data.results)
}

function createOptionsForCities(cities) {
    selectCity.innerHTML = ""

    cities.forEach(function (val) {
        let option = document.createElement('option')
        option.value = val.mun_code[0]
        option.innerText = val.mun_name_fr[0]

        selectCity.append(option)
    })
}


async function getCityInfo() {
    let data = await callApi(`https://www.odwb.be/api/explore/v2.1/catalog/datasets/communesgemeente-belgium/records?where=mun_code=${selectCity.value}`)
    console.log(data)

}

window.onload = function () {
    getProvinces()
    selectProvince.addEventListener('change', getCities)
    selectCity.addEventListener('change', getCityInfo)
}



