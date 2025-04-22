import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpezarForm from './EmpezarForm';
import FinalizarForm from './FinalizarForm';
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

// Definir el tipo de datos
interface Reparacion {
  id_equipo: string;
  fecha_inicio: string;
  equipo: string;
  falla_encontrada: string;
  estado_modulo: string;
  horas_estimadas: number;
  procedimiento: string;
  responsable: string;
  fecha_finalizacion?: string; // Puede ser opcional
}

const Reparaciones: React.FC = () => {
  const [reparacionesData, setReparacionesData] = useState<Reparacion[]>([]);
  const [query, setQuery] = useState('');
  const [filteredReparaciones, setFilteredReparaciones] = useState<Reparacion[]>(reparacionesData);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reparaciones')
      .then(response => {
        setReparacionesData(response.data);
        setFilteredReparaciones(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener las reparaciones:", error);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  useEffect(() => {
    if (query === '') {
      setFilteredReparaciones(reparacionesData);
    } else {
      const filtered = reparacionesData.filter(item =>
        item.id_equipo.toString().includes(query)
      );
      setFilteredReparaciones(filtered);
    }
  }, [query, reparacionesData]);

  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>REPARACIONES</h1>
      <p className='text-xl font-semibold text-center text-gray-900 mb-6'>Bienvenido a la página de reparaciones.</p>

      <div className="flex items-center justify-between mb-6">
        <div className="flex">
          <Sheet>
            <SheetTrigger className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
              Empezar reparación
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <SheetTitle>
              <SheetDescription>
              </SheetDescription>
              </SheetTitle>
              <EmpezarForm />
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
              Finalizar reparación
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <SheetTitle>
              <SheetDescription>
              </SheetDescription>
              </SheetTitle>
              <FinalizarForm />
            </SheetContent>
          </Sheet>
        </div>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar por ID..."
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
        />
      </div>

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
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Procedimiento</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {filteredReparaciones.map((item) => (
              <tr key={item.id_equipo} className="border-t">
                <td className="px-4 py-2 text-center">{item.id_equipo}</td>
                <td className="px-4 py-2">{item.fecha_inicio}</td>
                <td className="px-4 py-2 text-center">{item.equipo}</td>
                <td className="px-4 py-2 text-center">{item.falla_encontrada}</td>
                <td className="px-4 py-2 text-center">{item.estado_modulo}</td>
                <td className="px-4 py-2 text-center">{item.horas_estimadas}</td>
                <td className="px-4 py-2 text-center">{item.procedimiento}</td>
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
