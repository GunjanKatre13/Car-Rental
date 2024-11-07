const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const db = require('./db');

// Routes
const carsRoute = require('./routes/carsRoutes');
const usersRoute = require('./routes/usersRoutes');
const bookingsRoute = require('./routes/bookingsRoutes');

// Enable CORS for your Vercel frontend URL
app.use(cors({ origin: 'https://car-rental-five-zeta.vercel.app' }));

// Middleware
app.use(express.static("public"));
app.use(express.json());

// Use routes with base paths
app.use('/api/cars', carsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute);

// Start the server
app.listen(port, () => console.log(`Node.js server started on port ${port}`));