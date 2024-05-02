const Reservation = require('../model/reservation');

exports.renderReservationPage = (req, res) => {
    res.render('reservation');
};

exports.reserveRoom = async (req, res) => {
    try {
        // Extract reservation details from request body
        const { reservationDate, userId } = req.body;
        console.log(req.body)
        const roomId = req.params.id
        // Perform validation and save reservation details to database
        // Example:
        const reservation = new Reservation({
            reservationDate,
            user:userId,
            room:roomId,
        });

        await reservation.save();

        res.send('Reservation successful!');
    } catch (error) {
        console.error('Error reserving room:', error);
        res.status(500).send('An error occurred while processing your reservation.');
    }
};
