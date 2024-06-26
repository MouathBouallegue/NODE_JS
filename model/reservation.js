const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reservationDate: {
        type: Date,
        required: true
    }
});


const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;