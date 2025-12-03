// src/utils/cache.js
const NodeCache = require('node-cache');

// TTL 10 menit
const cache = new NodeCache({ stdTTL: 600 });

module.exports = cache;
