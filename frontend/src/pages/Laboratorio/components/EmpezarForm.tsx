import React, { useState } from 'react';
import axios from 'axios';

const EmpezarForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id_equipo: '',           // Cambié 'equipoID' a 'id_equipo'
    fecha_inicio: '',        // Cambié 'fechaInicio' a 'fecha_inicio'
    equipo: '',              // Cambié 'descripcion' a 'equipo'
    falla_encontrada: '',    // Cambié 'fallaEncontrada' a 'falla_encontrada'
    horas_estimadas: 0,
    procedimiento: '',       // Cambié 'procedimiento' a 'procedimiento'
    responsable: '',         // Cambié 'tecnico' a 'responsable'
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
      const response = await axios.post('http://localhost:5000/api/reparaciones/empezar', formData);
      console.log('Reparación iniciada', response.data);
      // Aquí puedes hacer algo con la respuesta, como redirigir o mostrar un mensaje
    } catch (error) {
      console.error('Error al crear la incidencia:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Formulario de Reparación</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Campo ID del equipo */}
          <div>
            <label htmlFor="id_equipo" className="block text-sm font-medium text-gray-700 mb-2">
              ID del equipo:
            </label>
            <input
              type="text"
              id="id_equipo"
              name="id_equipo"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el ID del equipo"
              value={formData.id_equipo}
              onChange={handleChange}
            />
          </div>

          {/* Campo Fecha de inicio */}
          <div>
            <label htmlFor="fecha_inicio" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha de inicio:
            </label>
            <input
              type="date"
              id="fecha_inicio"
              name="fecha_inicio"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              value={formData.fecha_inicio}
              onChange={handleChange}
            />
          </div>

          {/* Campo Equipo */}
          <div>
            <label htmlFor="equipo" className="block text-sm font-medium text-gray-700 mb-2">
              Equipo:
            </label>
            <textarea
              id="equipo"
              name="equipo"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              rows={2}
              placeholder="Describe el equipo..."
              value={formData.equipo}
              onChange={handleChange}
            />
          </div>

          {/* Campo Descripción de la Falla */}
          <div>
            <label htmlFor="falla_encontrada" className="block text-sm font-medium text-gray-700 mb-2">
              Falla encontrada:
            </label>
            <textarea
              id="falla_encontrada"
              name="falla_encontrada"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              rows={3}
              placeholder="Describe el problema..."
              value={formData.falla_encontrada}
              onChange={handleChange}
            />
          </div>

          {/* Campo Horas estimadas */}
          <div>
            <label htmlFor="horas_estimadas" className="block text-sm font-medium text-gray-700 mb-2">
              Horas estimadas:
            </label>
            <input
              type="number"
              id="horas_estimadas"
              name="horas_estimadas"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              placeholder="Ingresa las horas estimadas"
              value={formData.horas_estimadas}
              onChange={handleChange}
            />
          </div>

          {/* Campo Procedimiento */}
          <div>
            <label htmlFor="procedimiento" className="block text-sm font-medium text-gray-700 mb-2">
              Procedimiento:
            </label>
            <textarea
              id="procedimiento"
              name="procedimiento"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              rows={3}
              placeholder="Describe el procedimiento..."
              value={formData.procedimiento}
              onChange={handleChange}
            />
          </div>

          {/* Campo Responsable */}
          <div>
            <label htmlFor="responsable" className="block text-sm font-medium text-gray-700 mb-2">
              Responsable:
            </label>
            <select
              id="responsable"
              name="responsable"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              value={formData.responsable}
              onChange={handleChange}
            >
              <option value="">Seleccionar técnico</option>
              <option value="Juan Pérez">Juan Pérez</option>
              <option value="Ana Gómez">Ana Gómez</option>
              <option value="Carlos López">Carlos López</option>
            </select>
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

export default EmpezarForm;
