import React from 'react';

const EmpezarForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Formulario de Reparación</h1>
        <form className="space-y-6">
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa tu nombre"
            />
          </div>

          {/* Campo Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          {/* Campo ID del equipo */}
          <div>
            <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700 mb-2">
              ID del equipo:
            </label>
            <input
              type="text"
              id="equipoID"
              name="equipoID"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa el ID del equipo"
              autoFocus
            />
          </div>

          {/* Campo Técnico asignado */}
          <div>
            <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700 mb-2">
              Técnico asignado:
            </label>
            <select
              id="tecnico"
              name="tecnico"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Seleccionar técnico</option>
              <option value="Juan Pérez">Juan Pérez</option>
              <option value="Ana Gómez">Ana Gómez</option>
              <option value="Carlos López">Carlos López</option>
            </select>
          </div>

          {/* Campo Fecha de inicio */}
          <div>
            <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha de inicio:
            </label>
            <input
              type="date"
              id="fechaInicio"
              name="fechaInicio"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Campo Descripción del problema */}
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
              Descripción del problema:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              rows={4}
              placeholder="Describe el problema..."
            />
          </div>

          {/* Campo Prioridad */}
          <div>
            <label htmlFor="prioridad" className="block text-sm font-medium text-gray-700 mb-2">
              Prioridad:
            </label>
            <select
              id="prioridad"
              name="prioridad"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          {/* Campo Horas estimadas */}
          <div>
            <label htmlFor="horasEstimadas" className="block text-sm font-medium text-gray-700 mb-2">
              Horas estimadas:
            </label>
            <input
              type="number"
              id="horasEstimadas"
              name="horasEstimadas"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa las horas estimadas"
            />
          </div>

          {/* Campo Estado inicial */}
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
              Estado inicial:
            </label>
            <select
              id="estado"
              name="estado"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="En revisión">En revisión</option>
              <option value="En proceso">En proceso</option>
            </select>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmpezarForm;
