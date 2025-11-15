const mongoose = require("mongoose");

const ReseniaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Juego",
    required: true
  },
  autor: {
    type: String,
    requerid: true,
    trim: true
  },
  puntuacion: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  textoReseña: {
    type: String,
    required: true,
    trim: true
  },
  recomendaria: {
    type: Boolean,
    default: false
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Reseña", ReseniaSchema);