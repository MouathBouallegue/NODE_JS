const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    nom:{type:String},
    capacity:Number,
})



const Room = mongoose.model('room',roomSchema)

module.exports = Room;