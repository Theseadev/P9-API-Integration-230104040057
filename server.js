// server.js
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const countriesRoutes = require('./src/routes/countries.routes');
const weatherRoutes = require('./src/routes/weather.routes');

const notFound = require('./src/middleware/notfound.middleware');
const errorHandler = require('./src/middleware/error.middleware');

const openapi = require('./src/docs/openapi');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/countries', countriesRoutes);
app.use('/api/weather', weatherRoutes);

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapi));

// Handler 404 & error
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
