import React from 'react';

const FinalizarForm: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Finalizar Reparación</h2>
                <form className="space-y-6">
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
