"use client";

import React, { useEffect, useState } from 'react';
import EmpezarForm from '@/pages/Laboratorio/components/EmpezarForm';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SheetSide } from '@/components/ui/sheetButtom';

const SubGarantias: React.FC = () => {
    
      // Datos de ejemplo para la tabla (sin botón directo en los datos)
      const [reparacionesData, ] = useState([
        { nombre: "ENTQUIM", nit: '1234567', personaContacto: 'David Vergara', numeroContacto: 3216189254 ,correoElectronico: 'dadvergara@gmail.com',  ubicacion: 'CL 74 BIS #69 c-23' },
        { nombre: "ENTQUIIM", nit: '1234567', personaContacto: 'David Vergara', numeroContacto: 3216189254 ,correoElectronico: 'dadvergara@gmail.com',  ubicacion: 'CL 74 BIS #69 c-23' },
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
            item.nombre.toString().includes(query)  // Compara el ID convertido a string con el query
          );
          setFilteredDocumentos(filtered);
        }
      }, [query, reparacionesData]);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>GARANTÍAS</h1>
            <p className='text-xl font-semibold text-center text-gray-900 mb-6'>¡Bienvenidos a la  página de garantías!</p>

            <div className="flex flex-wrap items-center  gap-4 mb-6">
            <h1 className='text-2xl font-semibold text-center text-gray-900  bg-gray-200 rounded-sm'>CLIENTES</h1>

              <Sheet>
               <SheetTrigger
                 className="border ml-92 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Nuevo cliente
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                  </SheetDescription>
                 </SheetTitle>
                <EmpezarForm />
               </SheetContent>
              </Sheet>

             <div className="flex items-center justify-between ">
                <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Buscar por nombre..."
                className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
                />
             </div>
            </div>
            {/* Tabla de reparaciones */}
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Nombre</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">NIT</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Persona de Contacto</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Número de Contacto</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Correo Electrónico </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Ubicación</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDocumentos.map((item) => (
                    <tr key={item.nombre} className="border-t">
                        <td className="px-4 py-2 text-center">{item.nombre}</td>
                        <td className="px-4 py-2">{item.nit}</td>
                        <td className="px-4 py-2 text-center">{item.personaContacto}</td>
                        <td className="px-4 py-2 text-center">{item.numeroContacto}</td>
                        <td className="px-4 py-2 text-center">{item.correoElectronico}</td>
                        <td className="px-4 py-2 text-center">{item.ubicacion}</td>
                        <td className="px-4 py-2 text-center"><SheetSide/></td>
                    </tr>
                ))}
           </tbody>
          </table>
         </div>
        </div>
    );
};

export default SubGarantias;