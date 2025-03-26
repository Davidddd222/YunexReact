import React, { useState, useEffect } from 'react';
import NuevoEnsamble from './NuevoEnsamble';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle, // Asegúrate de importar esto
} from "@/components/ui/sheet";

const Ensambles: React.FC = () => {
  // Estado para los datos de los ensambles
  const [ensamblesData] = useState([
    { 
      tipoEnsamble: 'Ensamble de computador', 
      cantidad: '1', 
      estado: 'En progreso', 
      cliente: 'Juan Pérez', 
      remitente: 'Juan David', 
      fechaEstimada: '2025-03-10', 
      tecnico: 'Juan Pérez' 
    },
  ]);

  // Estado para el valor de búsqueda
  const [query, setQuery] = useState('');

  // Estado para los resultados filtrados
  const [filteredEnsambles, setFilteredEnsambles] = useState(ensamblesData);

  // Manejar el cambio en el input de búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  // Filtrar los ensambles basados en el query
  useEffect(() => {
    if (query === '') {
      setFilteredEnsambles(ensamblesData);
    } else {
      // Filtra por tipo de ensamble
      const filtered = ensamblesData.filter(item =>
        item.tipoEnsamble.toLowerCase().includes(query.toLowerCase())  // Filtra por tipo de ensamble
      );
      setFilteredEnsambles(filtered);
    }
  }, [query, ensamblesData]); // Aquí agregamos 'ensamblesData' para que se actualice cuando los datos cambien

  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>ENSAMBLES</h1>
      <p className='text-xl font-semibold text-center text-gray-900 mb-6'>Bienvenido a la página de Ensambles.</p>

      {/* Contenedor para alinear los botones a la izquierda y el campo de búsqueda en el centro */}
      <div className="flex items-center justify-between mb-6">
        {/* Botón para mostrar el formulario de Nuevo Ensamble */}
        <div className="flex">
          <Sheet>
            <SheetTrigger
              className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Nuevo Ensamble
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <SheetTitle></SheetTitle>
              <NuevoEnsamble />
            </SheetContent>
          </Sheet>
        </div>

        {/* Campo de búsqueda centrado */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar por tipo de ensamble..."
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
        />
      </div>

      {/* Tabla de ensambles */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Opciones</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Tipo de Ensamble</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Cantidad</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Estado</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Cliente</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Remitente</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha Estimada</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Técnico</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnsambles.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-center">
                  {/* Opciones: Visualizar, Editar, Eliminar */}
                  <button className="text-blue-500 mr-2"></button>
                  <button className="text-yellow-500 mr-2"></button>
                  <button className="text-red-500"></button>
                </td>
                <td className="px-4 py-2 text-center">{item.tipoEnsamble}</td>
                <td className="px-4 py-2 text-center">{item.cantidad}</td>
                <td className="px-4 py-2 text-center">{item.estado}</td>
                <td className="px-4 py-2 text-center">{item.cliente}</td>
                <td className="px-4 py-2 text-center">{item.remitente}</td>
                <td className="px-4 py-2 text-center">{item.fechaEstimada}</td>
                <td className="px-4 py-2 text-center">{item.tecnico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ensambles;
