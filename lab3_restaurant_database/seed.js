const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant');
require('dotenv').config(); 

// Seeding
const seedData = require('./seed/seedData.json'); 
const seedDB = async () => {
  try {
    // conneecting to database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the Database');

    // Step 2: Delete all existing data in the restaurants collection (optional)
    await Restaurant.deleteMany();
    console.log('Existing data deleted!');

    // seeding data
    await Restaurant.insertMany(seedData);
    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error when seeding the database:', error);
  }
};

seedDB();

