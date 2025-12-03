// src/services/countries.service.js
const http = require('../utils/httpClient');
const cache = require('../utils/cache');

const BASE_URL = 'https://restcountries.com/v3.1';

async function fetchAllCountries() {
  const key = 'all_countries';

  const cached = cache.get(key);
  if (cached) return cached;

  const fields = 'name,region,subregion,population,capital,flags';
  const url = `${BASE_URL}/all?fields=${fields}`;

  const data = await http.get(url);
  cache.set(key, data);
  return data;
}

async function fetchByRegion(region) {
  const key = `region_${region}`;

  const cached = cache.get(key);
  if (cached) return cached;

  const fields = 'name,region,capital,flags,population';
  const url = `${BASE_URL}/region/${region}?fields=${fields}`;

  const data = await http.get(url);
  cache.set(key, data);
  return data;
}

async function fetchByName(name) {
  const key = `name_${name}`;

  const cached = cache.get(key);
  if (cached) return cached;

  const fields = 'name,region,capital,flags,population';
  const url = `${BASE_URL}/name/${name}?fields=${fields}`;

  const data = await http.get(url);
  cache.set(key, data);
  return data;
}

module.exports = { fetchAllCountries, fetchByRegion, fetchByName };