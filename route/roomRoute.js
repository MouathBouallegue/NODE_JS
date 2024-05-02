const express = require('express');
const roomController = require("../controller/roomController");
const router = express.Router();
const { authenticate } = require('../middelware/auth');

//Create A New room
router.get('/createRoom',authenticate,roomController.roomCreatePage );
router.post('/createRoom',authenticate,roomController.createRoom);
router.get('/rooms',authenticate,roomController.viewRooms);
module.exports = router;