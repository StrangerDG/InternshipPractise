const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/locationTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const locationSchema = new mongoose.Schema({
  ownerId: String,
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now },
});

const Location = mongoose.model('Location', locationSchema);

// Generate unique ID
app.post('/generate-id', (req, res) => {
  const ownerId = uuidv4();
  res.json({ ownerId });
});

// Save location
app.post('/track/:ownerId', async (req, res) => {
  const { ownerId } = req.params;
  const { latitude, longitude } = req.body;

  const location = new Location({ ownerId, latitude, longitude });
  await location.save();

  // Notify the owner (e.g., send email, push notification, etc.)
  console.log(`Location saved for owner ${ownerId}: ${latitude}, ${longitude}`);

  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});