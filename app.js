const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {checkuser} = require('./middelware/auth');
const RoomController = require('./controller/roomController');
const adminRoutes = require('./route/adminRoutes');
const roomRoute = require('./route/roomRoute');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();


// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use('/admin',adminRoutes);

// Set view engine
app.set("view engine", "ejs");

// Routes
const authRoute = require("./route/auth");
const reservationRoute = require("./route/reservationRoute");
app.get('/rooms', RoomController.viewRooms);

app.use('/room',roomRoute);

app.get('*',checkuser);
app.use("/auth", authRoute);
app.use("/reservation", reservationRoute);

const reserveRoute = require('./route/reserveRoute');
app.use('/', reserveRoute);
// Connect to MongoDB

const DATABASE_URL = process.env.MONGO_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
