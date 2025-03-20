import React, { useState, useEffect } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const Documentos: React.FC = () => {
  // Datos de ejemplo para la tabla (sin botón directo en los datos)
  const [reparacionesData, ] = useState([
    { placa: "ABC 123", vehiculo: 'Computador HP', marca: 'En progreso', tipoCombustible: 'Daño matriz', seguridadActiva: 'x', seguridadPasiva: 'x', mantenimientosRealizados: 'Juan Pérez' },
    { placa: "EFG 123", vehiculo: 'Computador HP', marca: 'En progreso', tipoCombustible: 'Daño matriz', seguridadActiva: 'x', seguridadPasiva: 'x', mantenimientosRealizados: 'Juan Pérez' },
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

  // Componente para el botón que abre el modal
  const handleOpenModal = (placa: string) => {
    console.log(`Abriendo modal para el vehículo con placa ${placa}`);
    // Aquí se abriría el modal, por ejemplo:
    // setShowModal(true); // Si usas un estado para mostrar el modal
  };

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
                <td className="px-4 py-2 text-center">{item.seguridadActiva}</td>
                <td className="px-4 py-2 text-center">{item.seguridadPasiva}</td>
                <td className="px-4 py-2 text-center">{item.mantenimientosRealizados}</td>
                <td className="px-4 py-2 text-center">
                  {/* Botón que siempre estará presente */}
                  <Button className='cursor-pointer' onClick={() => handleOpenModal(item.placa)}>
                    <CiFolderOn />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Dialog>
  <DialogTrigger> <CiFolderOn />Open</DialogTrigger>
  <DialogContent className='bg-white'>
    <DialogHeader>
      <DialogTitle>Editar seguridad activa</DialogTitle>
      <DialogDescription>
        <h1>Sistema de frenado</h1>
      </DialogDescription>
    </DialogHeader> 
    <DialogFooter>
          <Button type="submit" className='bg-blue-600' >Enviar</Button>
        </DialogFooter>
  </DialogContent>
</Dialog>

      </div>
    </div>
  );
};

export default Documentos;
