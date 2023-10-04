const apiKey = 'bd5e378503939ddaee76f12ad7a97608';

function getWeather() {
   const cityInput = document.getElementById('city-input').value;
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

   fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
         displayWeather(data);
      })
      .catch(error => {
         console.log('Error:', error);
      });
}

function displayWeather(data) {
   const weatherInfoContainer = document.getElementById('weather-info');
   weatherInfoContainer.innerHTML = '';

   const cityName = data.name;
   const temperature = data.main.temp;
   const description = data.weather[0].description;

   const cityElement = document.createElement('h3');
   cityElement.innerHTML = `City: ${cityName}`;

   const temperatureElement = document.createElement('p');
   temperatureElement.innerHTML = `Temperature: ${temperature}°C`;

   const descriptionElement = document.createElement('p');
   descriptionElement.innerHTML = `Description: ${description}`;

   weatherInfoContainer.appendChild(cityElement);
   weatherInfoContainer.appendChild(temperatureElement);
   weatherInfoContainer.appendChild(descriptionElement);
}