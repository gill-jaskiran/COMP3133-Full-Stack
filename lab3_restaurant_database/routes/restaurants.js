// Imports
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant'); 

// Getting all the restaurants
router.get('/', async (req, res) => {
  const { sortBy } = req.query;
  const sortOrder = sortBy === 'DESC' ? -1 : 1; 

  try {
    const restaurants = await Restaurant.find().sort({ restaurant_id: sortOrder });
    res.json(restaurants); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting by suisine type
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting restaurant =  Delicatessen but city is NOT Brooklyn
router.get('/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } })
      .select('cuisine name city') 
      .sort({ name: 1 }); 
    res.json(restaurants); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router; 

