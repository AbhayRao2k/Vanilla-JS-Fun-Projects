import YOUR_WEATHER_API_KEY from "./config.js";

const apiKey = YOUR_WEATHER_API_KEY;
const url = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const cityNameElement = document.getElementById("cityName");
const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");

getWeather.addEventListener("click", () => {
  const city = cityInput.value.trim();
  getWeatherData(city);
});

const getWeatherData = async (city) => {
  if (!city) {
    console.log("Please enter a city name")
    cityNameElement.textContent = "⚠️ Please enter a city name";
    temperatureElement.textContent = "";
    conditionElement.textContent = "";
    return;
  }

  cityInput.value = "";
  cityNameElement.textContent = "🔄 Fetching weather data...";
  temperatureElement.textContent = "";
  conditionElement.textContent = "";

  const apiUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json(); // API error message
      throw new Error(
        errorData.message || `Response status: ${response.status}`
      );
    }

    const json = await response.json();
    console.log(json);

    // Extract data from API
    const temperature = json.main.temp;
    const cityName = json.name;
    const condition = json.weather[0].main; // Example: "Clouds"
    const description = json.weather[0].description; // Example: "broken clouds"

    // Update UI with new weather data
    cityNameElement.textContent = `🌍 ${cityName}`;
    temperatureElement.textContent = `🌡️ Temperature: ${temperature}°C`;
    conditionElement.textContent = `☁️ Condition: ${condition} (${description})`;
  } catch (error) {
    console.error(error.message);
    cityNameElement.textContent = `❌ Error: ${error.message}`;
    temperatureElement.textContent = "";
    conditionElement.textContent = "";
  }
};
