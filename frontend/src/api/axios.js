// src/api/axios.js
import axios from 'axios';

// Crear una instancia de axios con la URL base del backend
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Cambia esto por la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
