const express = require('express');
const Room = require('../model/Room'); // Import the Room model

/*exports.Listerooms = async (req, res) => {
  try {
    const rooms = await Room.find(); // Use Room instead of room
    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur."
    });
  }
};

exports.roomPage = async (req, res) => {
  try {
    const rooms = await Room.find(); // Use Room instead of room
    res.render("roomlist", { rooms: rooms });
  } catch (err) {
    res.status(404).send("Page Not Found !");
  }
};
// room.controller.js
*/
exports.viewRooms = async(req,res)=>{
  try{
      const rooms = await Room.find();
      res.render('rooms',{rooms:rooms});
  }catch(err){
      console.log(err)
  }
}

exports.salleCreatePage = (req,res)=>{
  res.render('createSalle')
}
/*
// room.controller.js
const Rom = require('../model/Room');

exports.addRoom = async (req, res) => {
  try {
    const { name, capacity, availability } = req.body;
    const room = new Rom({ name, capacity, availability });
    await room.save();
    res.redirect('/rooms');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

*/
exports.roomPage = async(req,res)=>{
    try{
        const rooms = await Room.find();
        res.render('createRoom',{rooms:rooms});
    }catch(err){
        console.log(err)
    }
}

exports.roomCreatePage = (req,res)=>{ 
    res.render('createroom')
}

exports.createRoom = async(req,res)=>{
    try{
        const {nom,capacity} = req.body;
        const roomNom = await Room.findOne({nom: nom});
        if(roomNom){
            return res.status(404).send('room already exist!');
        }  
        const room = new Room({nom,capacity});
        await room.save();
        res.redirect('/rooms');

    }catch(err){
        res.status(403).send(err)
    }
}