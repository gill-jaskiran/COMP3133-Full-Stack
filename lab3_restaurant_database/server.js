const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurants'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// JSON
app.use(bodyParser.json());

app.use('/restaurants', restaurantRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo Database'))
  .catch((err) => console.error('Error connecting the the Mongo Database:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

