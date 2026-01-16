const Apikey ="db41c4b4eba7b65ad13ce59867b5aee1";
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(ApiUrl + city + `&appid=${Apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block" ;
        document.querySelector(".weather").style.display = "none";
    }
    else{

        const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempo").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none" ;
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

