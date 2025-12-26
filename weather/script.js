const Apikey ="db41c4b4eba7b65ad13ce59867b5aee1";
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const responce = await fetch(ApiUrl + `&appid=${Apikey}`);
    var data = await responce.json();

    
    console.log(data);


}

checkWeather();