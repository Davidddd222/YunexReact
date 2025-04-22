const mongoose = require('mongoose');

// Definir el esquema para Reparación
const ReparacionSchema = new mongoose.Schema({

  id_equipo: {  // Aquí estamos usando un ID personalizado
    type: String,
    required: true,
    unique: true,  // Asegúrate de que sea único
  },
  fecha_inicio: {
    type: Date,
    required: true,
  },
  equipo: {
    type: String,
    required: true,
  },
  falla_encontrada: {
    type: String,
    required: true,
  },
  estado_modulo: {
    type: String,
    default: 'En proceso', // Por defecto está en proceso
  },
  horas_estimadas: {
    type: Number,
    required: true,
  },
  procedimiento: {
    type: String,
    required: true,
  },
  responsable: {
    type: String,
    required: true, // Es importante que el responsable esté definido
  },
  fecha_finalizacion: {
    type: Date, // Campo para almacenar la fecha de finalización
  },
});

const Reparacion = mongoose.model('Reparacion', ReparacionSchema, 'reparaciones');

module.exports = Reparacion;
