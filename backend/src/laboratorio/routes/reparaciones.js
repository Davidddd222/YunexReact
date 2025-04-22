const express = require('express');
const router = express.Router();
const Reparacion = require('../models/Reparacion');  // Importar el modelo de Reparación

// Ruta para "Empezar Reparación"
router.post('/empezar', async (req, res) => {
  try {
    const { id_equipo, fecha_inicio, equipo, falla_encontrada, horas_estimadas, procedimiento, responsable } = req.body;

    // Validación de los datos
    if (!fecha_inicio || !equipo || !falla_encontrada || !horas_estimadas || !procedimiento || !responsable) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Crear una nueva reparación
    const nuevaReparacion = new Reparacion({
      id_equipo,  // Usamos el ID proporcionado
      fecha_inicio,
      equipo,
      falla_encontrada,
      horas_estimadas,
      procedimiento,
      responsable,
    });

    // Guardar la reparación en la base de datos
    await nuevaReparacion.save();

    // Responder con la reparación creada
    return res.status(201).json({
      message: 'Reparación iniciada correctamente.',
      reparacion: nuevaReparacion,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Hubo un error al iniciar la reparación.' });
  }
});

// Ruta para "Finalizar Reparación"
router.post('/finalizar/:id_equipo', async (req, res) => {
    try {
      const { id_equipo } = req.params;  // Extraemos el id_equipo de los parámetros de la URL
      const { estado_modulo, fecha_finalizacion } = req.body;
  
      // Validación de los datos
      if (!estado_modulo || !fecha_finalizacion) {
        return res.status(400).json({ message: 'El estado del módulo y la fecha de finalización son obligatorios.' });
      }
  
      // Buscar la reparación por el id_equipo proporcionado
      const reparacion = await Reparacion.findOne({ id_equipo });
  
      if (!reparacion) {
        return res.status(404).json({ message: 'Reparación no encontrada.' });
      }
  
      // Actualizar el estado y la fecha de finalización
      reparacion.estado_modulo = estado_modulo;
      reparacion.fecha_finalizacion = fecha_finalizacion;
  
      // Guardar los cambios
      await reparacion.save();
  
      return res.status(200).json({
        message: 'Reparación finalizada correctamente.',
        reparacion,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Hubo un error al finalizar la reparación.' });
    }
  });

  // Ruta para obtener todas las reparaciones
router.get('/', async (req, res) => {
    try {
      const reparaciones = await Reparacion.find();  // Obtener todas las reparaciones desde MongoDB
      return res.status(200).json(reparaciones);  // Responder con las reparaciones en formato JSON
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Hubo un error al obtener las reparaciones.' });
    }
  });
  
  
  
// Exportar el router correctamente
module.exports = router;