// src/routes/countries.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/countries.controller');

// GET semua negara
router.get('/', controller.getAll);

// GET negara berdasarkan region
router.get('/region/:region', controller.getByRegion);

// GET negara berdasarkan nama
router.get('/name/:name', controller.getByName);

module.exports = router;
