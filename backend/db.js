require('dotenv').config();  // Cargar las variables del archivo .env

const mongoose = require('mongoose');

// Obtener la URI de la base de datos desde las variables de entorno
const dbUri = process.env.MONGO_URI;  // Usamos MONGO_URI en lugar de DB_URI

mongoose.connect(dbUri)
  .then(() => {
    const dbName = dbUri.split('/').pop();
    console.log(`Conectado a MongoDB en la base de datos ${dbName}`);
  })
  .catch((error) => console.log('Error al conectar con MongoDB:', error));
