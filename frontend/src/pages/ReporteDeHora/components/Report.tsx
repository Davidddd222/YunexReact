import React, { useState } from 'react';
import SearchComponent from '@/pages/Garantias/components/SearchComponent';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NewClient from '@/pages/Garantias/components/NewClient';

const Report: React.FC = () => {

        const [reparacionesData] = useState([
                     { archivo: "1234", nombre: 'David Vergara', fecha: '2023-10-23', horaEntrada: '08:00', horaSalida: '17:00', totalHoras: '9', horasExtras: '1', comentarios: 'Comentarios', historial: 'Historial' },
                     { archivo: "1235", nombre: 'José Miguel', fecha: '2023-10-23', horaEntrada: '08:00', horaSalida: '17:00', totalHoras: '9', horasExtras: '1', comentarios: 'Comentarios', historial: 'Historial' },
                     ]);
        const [filteredDocumentos, setFilteredDocumentos] = useState(reparacionesData);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>Reporte de Hora</h1>
            <p className='text-xl font-semibold text-center text-gray-900 mb-6'>Este es un componente básico para el reporte de hora.</p>

            <div className="flex flex-wrap items-center  gap-4 mb-6">

            <Sheet>
               <SheetTrigger
                 className="border border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Agregar registro
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                  </SheetDescription>
                 </SheetTitle>
                <NewClient />
               </SheetContent>
              </Sheet>

              <Sheet>
               <SheetTrigger
                 className="border border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Generar reporte
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                  </SheetDescription>
                 </SheetTitle>
                <NewClient />
               </SheetContent>
              </Sheet>

            <div className="flex ml-74 items-center justify-between">
                <SearchComponent
                data={reparacionesData}
                setFilteredData={setFilteredDocumentos}
                />
              </div>
              </div>
            <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Empleado ID</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Hora de entrada</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Hora de salida</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Total de horas</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Horas extras</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Comentarios</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Historial</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocumentos.map((item) => (
              <tr key={item.archivo} className="border-t">
                <td className="px-4 py-2 text-center">{item.archivo}</td>
                <td className="px-4 py-2">{item.nombre}</td>
                <td className="px-4 py-2">{item.fecha}</td>
                <td className="px-4 py-2 text-center">{item.horaEntrada}</td>
                <td className="px-4 py-2 text-center">{item.horaSalida}</td>
                <td className="px-4 py-2 text-center">{item.totalHoras}</td>
                <td className="px-4 py-2 text-center">{item.horasExtras}</td>
                <td className="px-4 py-2 text-center">{item.comentarios}</td>
                <td className="px-4 py-2 text-center">{item.historial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Report;