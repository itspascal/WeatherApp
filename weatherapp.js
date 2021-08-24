const searchBox = document.querySelector(".location-search");
const celsiusButton = document.querySelector('.celButton');
const fahrenheitButton = document.querySelector('.fahButton');
const cityT = document.querySelector(".cityTemp");
const cityD = document.querySelector(".cityDesc");
const cityN = document.querySelector(".cityName");

const api = {
    apiKey: 'ffe7b5a91a40fe7e8eaa5913e241d749',
    apiUrl : 'https://api.openweathermap.org/data/2.5/'
}

/*
    const citySearch = document.querySelector('.location-search').value
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&appid='+api.apiKey)
.then(response => response.json())
.then(data => console.log(data))  

*/
 searchBox.addEventListener('keydown',function(event){
     if(event.keyCode === 13) {
         event.preventDefault();
         fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=metric&appid='+api.apiKey)
     .then(response => response.json())
     /*.then(data => console.log(data)) */
     .then(data => {
         cityName = data['name']
         cityDesc = data['weather'][0]['description']
         cityTemp = data['main']['temp']

         cityN.innerHTML = cityName;
         cityD.innerHTML = cityDesc;
         cityT.innerHTML = cityTemp;

        
     })
     }
     });

function cButton() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=metric&appid='+api.apiKey)
        .then(response => response.json())
        /*.then(data => console.log(data)) */
        .then(data => {
            cityName = data['name']
            cityDesc = data['weather'][0]['description']
            cityTemp = data['main']['temp']
   
            cityN.innerHTML = cityName;
            cityD.innerHTML = cityDesc;
            cityT.innerHTML = cityTemp;
    })
}

function fButton () {
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=imperial&appid='+api.apiKey)
        .then(response => response.json())
        /*.then(data => console.log(data)) */
        .then(data => {
            cityName = data['name']
            cityDesc = data['weather'][0]['description']
            cityTemp = data['main']['temp']
   
            cityN.innerHTML = cityName;
            cityD.innerHTML = cityDesc;
            cityT.innerHTML = cityTemp;
    })
}