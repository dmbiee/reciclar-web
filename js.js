const APIkey = "d50f3033ad36f481e2efa7109db95671"


const result = document.getElementById('weatherResult');

const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=es`)
const forecastData = await forecastRes.json();
console.log(forecastData)

const current = forecastData.list[0];
const currentId = current.weather[0].id
console.log(current.weather[0].id)
const currentIcon = getWeatherIcon(currentId);

let html = `<h2>Clima en ${name}, ${country}</h2>
    <img src="${currentIcon}" alt="icono clima actual" width="80">
    <p><strong>Temperatura:</strong> ${current.main.temp} °C</p>
    <p><strong>Condición:</strong> ${current.weather[0].description}</p>
    
    `


result.innerHTML = html;