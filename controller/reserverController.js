// reserverController.js

const Room = require('../model/Room');
const Reservation = require('../model/Rreservation');

// Controller method to render the reservation creation page
exports.reserveCreatePage = async (req, res) => {
    try {
        // Fetch the list of available rooms from the database
        const rooms = await Room.find();

        // Render the reservation creation page and pass the rooms data to it
        res.render('Rserve', { rooms: rooms });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller method to handle room reservation
exports.Rserve = async (req, res) => {
    try {
        const roomId = req.body.room_id;

        // Update the room status or perform other reservation logic
        const updatedRoom = await Room.findByIdAndUpdate(roomId, { status: 'reserved' }, { new: true });

      /*  if (!updatedRoom) {
            // If room is not found or cannot be updated, return an error response
            return res.status(404).json({ error: 'Room not found or cannot be reserved' });
        }*/

        // If room is successfully reserved, return success response
        res.status(200).json({ message: 'Room reserved successfully' });
       
    } catch (error) {
        // If an error occurs during reservation, return a 500 error response
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   
};
