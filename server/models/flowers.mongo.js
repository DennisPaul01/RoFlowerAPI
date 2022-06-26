const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  nume: {
    type: String,
    required: true,
  },
  denumirePopulara: {
    type: String,
  },
  image: {
    type: String,
  },
  zona: {
    type: String,
  },
  locatieGeografica: {
    type: [String],
  },
  diviziune: { type: String },
  descriere: {
    type: String,
  },
  location: [Number],
});

module.exports = mongoose.model("Flowers", flowerSchema);
