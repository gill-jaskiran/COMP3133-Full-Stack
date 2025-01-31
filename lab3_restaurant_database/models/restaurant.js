const mongoose = require('mongoose');

// Defining the address schema
const AddressSchema = new mongoose.Schema({
  building: String,
  street: String,
  zipcode: String, 
});

// Define the Restaurant schema
const RestaurantSchema = new mongoose.Schema({
  restaurant_id: String,
  name: String,
  city: String,
  cuisine: String,
  address: AddressSchema,  
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);
