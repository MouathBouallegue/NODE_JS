// reserverRoute.js

const express = require('express');
const router = express.Router();
const { authenticate } = require('../middelware/auth');
const reserverController = require('../controller/reserverController');

// Route for creating a reservation page
router.get('/Rserve', authenticate, reserverController.reserveCreatePage);

// Route for reserving a room
router.post('/Rserve', authenticate, reserverController.Rserve);

module.exports = router;
