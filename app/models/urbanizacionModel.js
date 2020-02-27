const mongoose = require("mongoose");

let urbanizacionSheme = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },

  apartamentos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartamento"
    }
  ]
});

mongoose.model("Urbanizacion", urbanizacionSheme);
module.exports = mongoose.model("Urbanizacion");
