// src/utils/httpClient.js
const axios = require('axios');

async function get(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    // Normalisasi error agar middleware bisa handle
    throw {
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message,
      detail: err.response?.data || null,
      response: err.response
    };
  }
}

module.exports = { get };
