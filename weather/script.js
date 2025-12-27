const Apikey ="db41c4b4eba7b65ad13ce59867b5aee1";
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const responce = await fetch(ApiUrl + `&appid=${Apikey}`);
    var data = await responce.json();

    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

