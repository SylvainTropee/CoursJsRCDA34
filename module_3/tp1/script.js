let map;
let marker;

function displayData(data) {
    let p = document.getElementById('position')
    p.innerText = `Latitude = ${data.iss_position.latitude} | Longitude = ${data.iss_position.longitude}`

    map.flyTo([data.iss_position.latitude, data.iss_position.longitude])
    marker.setLatLng([data.iss_position.latitude, data.iss_position.longitude])

}

function getIssPosisition() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => response.json())
        .then(data => displayData(data))
}

function init(){
    map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let issIcon = L.icon({
        iconUrl: './assets/iss.png',
        iconSize:     [70, 70], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    marker = L.marker([51.5, -0.09], {icon: issIcon}).addTo(map);
}


window.onload = init



setInterval(getIssPosisition, 1000)