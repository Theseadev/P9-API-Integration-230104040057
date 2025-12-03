// src/routes/weather.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/weather.controller');

// GET cuaca kota
router.get('/', controller.getByCity);

module.exports = router;
