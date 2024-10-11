const inputBox = document.getElementById("searchbar");
const SearchBtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".weather-Img"); // Corrected class name
const temperature = document.querySelector(".Temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("Wind-speed");

async function Checkweather(city) {
  const apiKey = "1d140f175f56a5ceb7365463d41e7512";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const weather_data = await fetch(url).then((response) => response.json());

    // Update weather data in the DOM
    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed} km/h`;

    // Update the weather image based on the weather condition
    switch (weather_data.weather[0].main.toLowerCase()) {
      case "clouds":
        weather_img.src = "/assets/cloud.png";
        break;
      case "clear":
        weather_img.src = "/assets/clear.png";
        break;
      case "rain":
        weather_img.src = "/assets/rain.png";
        break;
      case "snow":
        weather_img.src = "/assets/snow.png";
        break;
      case "thunderstorm":
        weather_img.src = "/assets/thunderstorm.png";
        break;
      default:
        weather_img.src = "/assets/default.png"; // Fallback image
        break;
    }
  } catch (error) {
    alert("City not found. Please try again!");
  }
}

SearchBtn.addEventListener("click", () => {
  const city = inputBox.value.trim();
  if (city) {
    Checkweather(city);
  } else {
    alert("Please enter a city name!");
  }
});
