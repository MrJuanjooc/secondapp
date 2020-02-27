const mongoose = require("mongoose");

let apartamentoSheme = new mongoose.Schema({
  numero: {
    type: String,
    required: true
  },
  piso: {
    type: Number,
    required: true
  },
  urbanizacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Urbanizacion"
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Propietario"
  }
});

mongoose.model("Apartamento", apartamentoSheme);
module.exports = mongoose.model("Apartamento");
