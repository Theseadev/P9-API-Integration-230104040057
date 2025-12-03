// src/docs/openapi.js
const PORT = process.env.PORT || 3000;

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Praktikum #9 - API Integration (Modular)',
    version: '1.0.0',
    description: `
Integrasi API eksternal menggunakan arsitektur Node.js modular.
Dokumentasi ini mencakup layanan:
- REST Countries API
- OpenWeatherMap (OWM API)
    
Semua endpoint telah ditata berdasarkan kategori (Countries & Weather).`
  },

  servers: [{ url: `http://localhost:${PORT}` }],

  tags: [
    { name: 'Countries', description: 'Endpoint terkait data negara (REST Countries API)' },
    { name: 'Weather', description: 'Endpoint cuaca dari OpenWeatherMap API' }
  ],

  paths: {
    // -------------------------
    // COUNTRIES
    // -------------------------
    '/api/countries': {
      get: {
        tags: ['Countries'],
        summary: 'Ambil semua negara',
        description: 'Mengambil seluruh data negara dengan field aman (name, region, population, capital, flags).',
        operationId: 'getAllCountries',
        responses: {
          200: {
            description: 'Berhasil mengambil daftar negara',
            content: {
              'application/json': {
                example: [
                  {
                    name: { common: "Indonesia" },
                    region: "Asia",
                    capital: ["Jakarta"],
                    population: 273523621,
                    flags: { png: "https://flagcdn.com/w320/id.png" }
                  }
                ]
              }
            }
          }
        }
      }
    },

    '/api/countries/region/{region}': {
      get: {
        tags: ['Countries'],
        summary: 'Ambil negara berdasarkan region',
        description: 'Contoh region: asia, europe, africa, americas.',
        operationId: 'getCountriesByRegion',
        parameters: [
          {
            name: 'region',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Nama region (misal: asia)'
          }
        ],
        responses: {
          200: {
            description: 'Negara ditemukan berdasarkan region'
          },
          400: { description: 'Region tidak valid' }
        }
      }
    },

    '/api/countries/name/{name}': {
      get: {
        tags: ['Countries'],
        summary: 'Cari negara berdasarkan nama',
        description: 'Mencari negara berdasarkan nama umum (common name).',
        operationId: 'getCountryByName',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Nama negara (misal: indonesia)'
          }
        ],
        responses: {
          200: { description: 'Negara ditemukan' },
          404: { description: 'Negara tidak ditemukan' }
        }
      }
    },

    // -------------------------
    // WEATHER
    // -------------------------
    '/api/weather': {
      get: {
        tags: ['Weather'],
        summary: 'Ambil cuaca kota',
        description: `
Mengambil data cuaca dari OpenWeatherMap.
Pastikan variabel environment **OWM_API_KEY** sudah diset di file .env.
        `,
        operationId: 'getWeatherByCity',
        parameters: [
          {
            name: 'city',
            in: 'query',
            schema: { type: 'string' },
            required: false,
            description: 'Nama kota (default: Palangkaraya)'
          }
        ],
        responses: {
          200: {
            description: 'Data cuaca berhasil diambil',
            content: {
              'application/json': {
                example: {
                  city: "Palangkaraya",
                  temperature: 30.5,
                  humidity: 70,
                  wind_speed: 3.2,
                  description: "broken clouds"
                }
              }
            }
          },
          400: { description: 'API key tidak diset atau invalid' }
        }
      }
    }
  }
};
