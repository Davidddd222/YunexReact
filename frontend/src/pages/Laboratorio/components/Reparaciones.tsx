import React, { useState, useEffect } from 'react';
import EmpezarForm from './EmpezarForm';
import FinalizarForm from './FinalizarForm';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Reparaciones: React.FC = () => {
  // Datos de ejemplo para la tabla
  const reparacionesData = [
    { id: 123, equipo: 'Computador HP', estado: 'En progreso', falla: 'Daño matriz' ,fecha: '2025-03-10', reparacionEstimada: '5' ,responsable: 'Juan Pérez' },
    { id: 122, equipo: 'Computador Lenovo', estado: 'En revisión', falla: 'Daño matriz' ,fecha: '2025-03-10', reparacionEstimada: '1' ,responsable: 'Juan David' },
    { id: 133, equipo: 'CPU 4127', estado: 'En progreso', falla: 'Daño matriz' ,fecha: '2025-03-10', reparacionEstimada: '2' ,responsable: 'Carlos Pérez' },
  ];

  // Estado para el valor de búsqueda
  const [query, setQuery] = useState('');

  // Estado para los resultados filtrados
  const [filteredReparaciones, setFilteredReparaciones] = useState(reparacionesData);

  // Manejar el cambio en el input de búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  // Filtrar las reparaciones basadas en el query (ahora filtra por ID)
  useEffect(() => {
    if (query === '') {
      setFilteredReparaciones(reparacionesData);
    } else {
      // Filtra por ID, convierte el query a número
      const filtered = reparacionesData.filter(item =>
        item.id.toString().includes(query)  // Compara el ID convertido a string con el query
      );
      setFilteredReparaciones(filtered);
    }
  }, [query]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reparaciones</h1>
      <p className="mb-6">Bienvenido a la página de reparaciones.</p>

      {/* Contenedor para alinear los botones a la izquierda y el campo de búsqueda en el centro */}
      <div className="flex items-center justify-between mb-6">
        {/* Botón para mostrar el formulario de Empezar */}
        <div className="flex">
          <Sheet>
            <SheetTrigger
              className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Empezar reparación
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <EmpezarForm />
            </SheetContent>
          </Sheet>

          {/* Botón para mostrar el formulario de Finalizar */}
          <Sheet>
            <SheetTrigger
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Finalizar reparación
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <FinalizarForm />
            </SheetContent>
          </Sheet>
        </div>

        {/* Campo de búsqueda centrado */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar por ID..."
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
        />
      </div>

      {/* Tabla de reparaciones */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">ID</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha de inicio</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Equipo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Falla encontrada</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Estado módulo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Reparación estimada(Horas)</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {filteredReparaciones.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 text-center">{item.id}</td>
                <td className="px-4 py-2">{item.fecha}</td>
                <td className="px-4 py-2 text-center">{item.equipo}</td>
                <td className="px-4 py-2 text-center">{item.falla}</td>
                <td className="px-4 py-2 text-center">{item.estado}</td>
                <td className="px-4 py-2 text-center">{item.reparacionEstimada}</td>
                <td className="px-4 py-2 text-center">{item.responsable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reparaciones;
