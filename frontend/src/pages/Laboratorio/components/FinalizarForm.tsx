import React, { useState } from 'react';
import axios from 'axios';

const FinalizarForm: React.FC = () => {
  const [formData, setFormData] = useState({
    equipoID: '',
    estadoModulo: 'Reparado',
    descripcion: '',
    fechaFinalizacion: '',
  });

  // Manejo de los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviar los datos del formulario al backend
      const response = await axios.put(`http://localhost:4000/api/update/${formData.equipoID}`, formData);
      console.log('Reparación finalizada', response.data);
      // Aquí puedes manejar la respuesta, como redirigir o mostrar un mensaje
    } catch (error) {
      console.error('Error al finalizar la reparación:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Finalizar Reparación</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Campo ID del equipo */}
          <div>
            <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700 mb-2">
              ID del equipo
            </label>
            <input
              type="text"
              id="equipoID"
              name="equipoID"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa el ID del equipo"
              value={formData.equipoID}
              onChange={handleChange}
            />
          </div>

          {/* Campo Estado del módulo */}
          <div>
            <label htmlFor="estadoModulo" className="block text-sm font-medium text-gray-700 mb-2">
              Estado del módulo
            </label>
            <select
              id="estadoModulo"
              name="estadoModulo"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={formData.estadoModulo}
              onChange={handleChange}
            >
              <option value="Reparado">Reparado</option>
              <option value="Irreparable">Irreparable</option>
            </select>
          </div>

          {/* Campo Descripción de la reparación */}
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
              Descripción de la reparación
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              rows={4}
              placeholder="Describe la reparación..."
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>

          {/* Campo Fecha de finalización */}
          <div>
            <label htmlFor="fechaFinalizacion" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha de finalización
            </label>
            <input
              type="date"
              id="fechaFinalizacion"
              name="fechaFinalizacion"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={formData.fechaFinalizacion}
              onChange={handleChange}
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Finalizar Reparación
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalizarForm;
