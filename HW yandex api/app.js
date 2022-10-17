'use strict';


//-------- creating a request for getting weather data --------------------

async function submit(){
   try{
    let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=53.904541&lon=27.561523&appid=eae44c3ebf0781c0f22da631df12fb90&units=metric&lang=ru'); // завершается с заголовками ответа
    let result = await response.json(); // читать тело ответа в формате JSON
    console.log(result)

    getCurrentTemp(result.list[0].main.temp, result.city.name);

   }
   catch(err){console.log('Произошла ошибка',err)}
}

submit()

//---------------- displaying current temp ----------------------------------

function getCurrentTemp(temp, city){
   let div = document.querySelector('.weather-widget');
   div.innerHTML = 'Сейчас в городе ' + city + ' ' + Math.round(temp)  + ' &#176';
}

//---------------- getting coords for current location  ---------------------

let lat = 0;
let long = 0;


navigator.geolocation.getCurrentPosition(positionData => {
    lat = positionData.coords.latitude;
    long = positionData.coords.longitude;
    ymaps.ready(init(lat,long));
});



//------------------- setting and displaying searched city----------------------

function getCurrentCity(city){
let box = document.querySelector('.current-location');
let newCity = city.toUpperCase();
box.innerHTML = 'Сейчас на карте: ' + newCity;
}

// ------------------ geocoding( looking for coords by searched name) -----------


async function geocoding(city){
    try{
    let getCoords = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=dc8c4f86-ef35-4cbd-ae74-1f6044cdc950&format=json&geocode=${city}`);
    let res = await getCoords.json();
    console.log(res);
    lat = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.slice(10,19) //lat
    long = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.slice(0,9) //long
    getCurrentCity(city);
    ymaps.ready(init(lat, long)); // rendering map with searched city
    }
    catch(err){
    console.log('В геокодинге >>',err)
    }
    
}

//-------------------- MAP-----------------------------


var myMap;

function init (lat,long) {
    myMap = new ymaps.Map('map', {
        center: [lat, long], 
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}

// ------------------- working with input -----------------------------

let searchedCity = '';
document.querySelector('button').addEventListener('click', searchingCity);

function searchingCity(){
    myMap.destroy()
    let input = document.querySelector('input[name="search-input"]').value;
    console.log('typed ' + input);
    searchedCity = input;
    geocoding(searchedCity) 
    document.querySelector('input[name="search-input"]').value = '';
}


