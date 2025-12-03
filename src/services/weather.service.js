// src/services/weather.service.js
const http = require('../utils/httpClient');
const cache = require('../utils/cache');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeatherByCity(city, apiKey) {
  if (!apiKey) throw { status: 400, message: 'API key tidak diset' };

  const key = `weather_${city}`;

  const cached = cache.get(key);
  if (cached) return cached;

  const url = `${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;

  const data = await http.get(url);
  cache.set(key, data);
  return data;
}

module.exports = { fetchWeatherByCity };
