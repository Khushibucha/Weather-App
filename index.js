const WeatherApiKey = "34f12c2b799b9944ea3ffbbafb56d215";

document.getElementById("search-bar").addEventListener("keypress", function(e){

    if(e.key === "Enter") {
        document.getElementById("search-btn").click();
}
}
);


document.getElementById("search-btn").addEventListener("click", function(e){
    e.preventDefault();
    const cityName = document.getElementById("search-bar").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WeatherApiKey}`) 
    .then(response => response.json())
    .then((data) =>{
        if(data.cod === "404"){
            document.getElementById("error-box").style.display = "flex"
            document.getElementById("result-box").style.display = "none"
        }
        else{
            document.getElementById("error-box").style.display = "none"
            document.getElementById("result-box").style.display = "flex"
            document.getElementById("city_name").innerHTML = `${data.name}`
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("main-temp").innerHTML = `${Math.trunc(data.main.temp)} <span>&deg;C</span>`
            document.getElementById("description").innerHTML = data.weather[0].main
            document.getElementById("humidity").innerHTML = `${data.main.humidity} %`
            document.getElementById("feels_like").innerHTML = `${Math.trunc(data.main.feels_like)} &deg;C`
        }
        });


})