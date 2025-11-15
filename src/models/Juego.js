const mongoose = require("mongoose");

const JuegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  genero: {
    type: [String],
    required: false
  },          
  plataforma: {
    type: String,
    required: true
  },  
  añoLanzamiento: {
    type: Number,
    required: true,
    min: 1950,
    max: new Date().getFullYear()
  },
  desarrollador: {
    type: String,
    required: false
  },
  dificultad: {
    type: String,
    enum: ["Facil", "Normal", "Dificil"],
    default: "Normal"
  },
  imagenPortada: {
    type: String,
    required: false,
    trim: true
  }, 
  descripcion: {
    type: String,
    required: false
  },
  completado: {
    type: Boolean,
    default: false
  },
    horasJugadas: {
    type: Number,
    default: 0,
    min: 0
  },
  puntuacion: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Juego", JuegoSchema);