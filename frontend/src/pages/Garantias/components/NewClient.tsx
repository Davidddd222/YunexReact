import React, { useState } from 'react';
import axios from 'axios';

const NewClient: React.FC = () => {
  const [formData, setFormData] = useState({
    equipoID: '',
    tecnico: '',
    fechaInicio: '',
    descripcion: '',    
    prioridad: 'Baja',
    horasEstimadas: 0,
    estado: 'En revisión',
  });

  // Manejo de cambios en los campos del formulario
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
      const response = await axios.post('http://localhost:4000/create-new', formData);
      console.log('Incidencia creada', response.data);
      // Aquí puedes hacer algo con la respuesta, como redirigir o mostrar un mensaje
    } catch (error) {
      console.error('Error al crear la incidencia:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Crear nuevo cliente</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Campo nombre del representante */}
          <div>
            <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="equipoID"
              name="equipoID"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el nombre del representante"
              value={formData.equipoID}
              onChange={handleChange}
            />
          </div>

          {/* Campo Técnico asignado */}
          <div>
            <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700 mb-2">
              Personal a cargo:
            </label>
            <select
              id="tecnico"
              name="tecnico"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              value={formData.tecnico}
              onChange={handleChange}
            >
              <option value="">Seleccionar personal</option>
              <option value="Juan Pérez">Juan Pérez</option>
              <option value="Ana Gómez">Ana Gómez</option>
              <option value="Carlos López">Carlos López</option>
            </select>
          </div>

          {/* Campo Fecha de inicio */}
          <div>
            <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700 mb-2">
              NIT:
            </label>
            <input
              type="string"
              id="fechaInicio"
              name="fechaInicio"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              value={formData.fechaInicio}
              onChange={handleChange}
            />
          </div>

          {/* Campo Descripción del problema */}
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
              Dirección:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              placeholder="Escribe la dirección..."
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>

          {/* Campo Prioridad */}
          <div>
            <label htmlFor="prioridad" className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico:
            </label>
            <input
              type="text"
              id="equipoID"
              name="equipoID"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el correo electrónico"
              value={formData.equipoID}
              onChange={handleChange}
            />
          </div>

          {/* Campo Horas estimadas */}
          <div>
            <label htmlFor="horasEstimadas" className="block text-sm font-medium text-gray-700 mb-2">
              Número de celular:
            </label>
            <input
              type="string"
              id="horasEstimadas"
              name="horasEstimadas"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              placeholder="Ingresa las horas estimadas"
              value={formData.horasEstimadas}
              onChange={handleChange}
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
