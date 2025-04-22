require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reparacionesRoutes = require('./src/laboratorio/routes/reparaciones');  // Asegúrate de que la ruta sea correcta
const cors = require('cors');  // Importa el paquete 'cors'

const app = express();


app.use(cors()); // Habilitar CORS para todas las rutas

// Middleware
app.use(bodyParser.json());  // Para parsear el cuerpo de las solicitudes JSON

// Obtener la URI de la base de datos desde el archivo .env
const dbUri = process.env.DB_URI; // Aquí usamos DB_URI desde el archivo .env

// Conectar a MongoDB
mongoose.connect(dbUri)  // Usamos la URI de la base de datos
  .then(() => console.log('Conectado a MongoDB'))  // Conexión exitosa
  .catch(err => console.log('Error al conectar a MongoDB:', err));  // Error al conectar

// Usar las rutas de reparaciones
app.use('/api/reparaciones', reparacionesRoutes);  // Aquí estamos diciendo que cualquier ruta que empiece con /api/reparaciones usará las rutas definidas en reparaciones.js

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});