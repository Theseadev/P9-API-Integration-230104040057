# P9-API-Integration

> 🧩 A professional Node.js / Express REST API server integrating external Country & Weather APIs with full Swagger documentation.

## 📌 Overview
This project demonstrates API integration using Node.js and Express by consuming external APIs (Countries API & OpenWeather API) and exposing them through clean, structured REST endpoints. It also includes complete Swagger-based API documentation for easy testing and development reference.

## 🚀 Features
- Fully structured REST API
- `/api/countries` — Fetch country data
- `/api/weather` — Fetch weather by city
- Integrated external API consumption
- Centralized error handling
- 404 Not Found middleware
- Request logging using Morgan
- Swagger UI documentation at `/docs`
- Clean project architecture (routes, controllers, middleware, documentation)

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **Morgan**
- **Swagger UI Express**
- **Axios**
- **Dotenv**

## 📂 Project Structure
```
.
├── server.js
├── package.json
├── .env
└── src/
    ├── routes/
    │   ├── countries.routes.js
    │   └── weather.routes.js
    ├── controllers/
    ├── middleware/
    │   ├── error.middleware.js
    │   └── notfound.middleware.js
    └── docs/
        └── openapi.js
```

## ⚙️ Installation & Setup
Clone repository:
```
git clone https://github.com/Theseadev/P9-API-Integration-230104040057.git
```

Install dependencies:
```
npm install
```

Create `.env` file:
```
PORT=3000
WEATHER_KEY=YOUR_OPENWEATHER_API_KEY
```

Run the server:
```
node server.js
```
or with Nodemon:
```
npx nodemon server.js
```

## 📘 API Documentation
Swagger UI is available at:
```
http://localhost:3000/docs
```

This includes:
- Endpoints
- Request parameters
- Response examples
- Interactive “Try it out” mode

## 🔗 API Usage
### Get All Countries
```
GET /api/countries
```

### Get Weather by City
```
GET /api/weather?city=Jakarta
```

## 🧩 Error Handling
This project includes:
- Centralized error middleware
- Graceful fallback for unknown routes
- Consistent JSON error structure

## 🤝 Contributing
1. Fork this repo
2. Create a new branch
3. Commit changes with meaningful messages
4. Push & submit a Pull Request

## 📄 License
This project currently has no license. Add a `LICENSE` file (MIT recommended) if needed.
