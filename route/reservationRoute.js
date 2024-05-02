const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');
const { authenticate } = require('../middelware/auth');

// Route to render the reservation page
router.get('/', authenticate, reservationController.renderReservationPage);

// Route to handle room reservation
router.post('/:id', authenticate, reservationController.reserveRoom);

module.exports = router;

