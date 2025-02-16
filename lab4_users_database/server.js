const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected Sucessfully");
    } catch (error) {
      console.error("MongoDB Connection Has Failed:", error.message);
      process.exit(1);
    }
  };

connectDB();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
