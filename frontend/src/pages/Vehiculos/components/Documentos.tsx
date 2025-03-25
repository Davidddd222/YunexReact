import React, { useState, useEffect } from 'react';
import { CiFolderOn, CiEdit } from 'react-icons/ci';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SeguridadActiva from './SeguridadActiva';
import SeguridadPasiva from './SeguridadPasiva';
import ArchivosDocuments from './ArchivosDocuments';

const Documentos: React.FC = () => {
  // Datos de ejemplo para la tabla (sin botón directo en los datos)
  const [reparacionesData, ] = useState([
    { placa: "ABC 123", vehiculo: 'Computador HP', marca: 'En progreso', tipoCombustible: 'Daño matriz',  mantenimientosRealizados: 'Juan Pérez' },
    { placa: "EFG 123", vehiculo: 'Computador HP', marca: 'En progreso', tipoCombustible: 'Daño matriz',  mantenimientosRealizados: 'Juan Pérez' },
  ]);

  // Estado para el valor de búsqueda
  const [query, setQuery] = useState('');

  // Estado para los resultados filtrados
  const [filteredDocumentos, setFilteredDocumentos] = useState(reparacionesData);

  // Manejar el cambio en el input de búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  // Filtrar las reparaciones basadas en el query (ahora filtra por ID)
  useEffect(() => {
    if (query === '') {
      setFilteredDocumentos(reparacionesData);
    } else {
      // Filtra por ID, convierte el query a número
      const filtered = reparacionesData.filter(item =>
        item.placa.toString().includes(query)  // Compara el ID convertido a string con el query
      );
      setFilteredDocumentos(filtered);
    }
  }, [query, reparacionesData]);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reparaciones</h1>
      <p className="mb-6">Bienvenido a la página de reparaciones.</p>

      {/* Contenedor para alinear los botones a la izquierda y el campo de búsqueda en el centro */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar por placa..."
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
        />
      </div>

      {/* Tabla de reparaciones */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Placa</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Clase de vehículo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Marca</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Tipo de combustible</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Seguridad activa</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Seguridad pasiva</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Mantenimientos realizados</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Archivos</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocumentos.map((item) => (
              <tr key={item.placa} className="border-t">
                <td className="px-4 py-2 text-center">{item.placa}</td>
                <td className="px-4 py-2">{item.vehiculo}</td>
                <td className="px-4 py-2 text-center">{item.marca}</td>
                <td className="px-4 py-2 text-center">{item.tipoCombustible}</td>
                <td className="px-4 py-2 text-center">
                <Sheet>
                 <SheetTrigger
                  className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md 
                             transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <CiEdit />
                     </SheetTrigger>
                      <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                       <SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                       </SheetTitle> 
                      <SeguridadActiva />
                     </SheetContent>
                    </Sheet>
                </td>

                <td className="px-4 py-2 text-center">
                <Sheet>
                 <SheetTrigger
                  className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md 
                             transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <CiEdit />
                     </SheetTrigger>
                      <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                       <SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                       </SheetTitle> 
                       <SeguridadPasiva />
                     </SheetContent>
                    </Sheet>
                </td>
                <td className="px-4 py-2 text-center">{item.mantenimientosRealizados}</td>
                <td className="px-4 py-2 text-center">
                <Sheet>
                 <SheetTrigger
                   className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md 
                              transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                     <CiFolderOn />
                      </SheetTrigger>
                       <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                        <SheetTitle>
                         <SheetDescription>
                         </SheetDescription>
                       </SheetTitle> 
                      <ArchivosDocuments />
                     </SheetContent>
                    </Sheet>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documentos;
