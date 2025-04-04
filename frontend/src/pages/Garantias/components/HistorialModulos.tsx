import React, { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NewClient from './NewClient';
import SearchComponent from './SearchComponent';
import { CiFolderOn } from 'react-icons/ci';
import ArchivosDocuments from '@/pages/Vehiculos/components/ArchivosDocuments';

const HistorialModulos: React.FC = () => {

    const [reparacionesData] = useState([
                 { archivo: "Firma de documentos ENTQUIM", modulo: 'PDF', fechaPeticion: '2023-10-23', finProceso: '2023-10-23' },
                 ]);

    const [filteredDocumentos, setFilteredDocumentos] = useState(reparacionesData);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>HISTORIAL DE MÓDULOS</h1>
            <p className='text-xl font-semibold text-center text-gray-900 mb-6'>Carpetas</p>

            <div className="flex flex-wrap items-center  gap-4 mb-6">
                <h1 className='text-2xl font-semibold text-center text-gray-900  bg-gray-200 rounded-sm'>HISTORIAL DE TICKECTS</h1>

                <Sheet>
               <SheetTrigger
                 className="border ml-49 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Agregar archivo
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                  </SheetDescription>
                 </SheetTitle>
                <NewClient />
               </SheetContent>
              </Sheet>

              <div className="flex items-center justify-between">
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
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Tickect</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Módulo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha de petición</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fin del proceso</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Archivos</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocumentos.map((item) => (
              <tr key={item.archivo} className="border-t">
                <td className="px-4 py-2 text-center">{item.archivo}</td>
                <td className="px-4 py-2">{item.modulo}</td>
                <td className="px-4 py-2 text-center">{item.fechaPeticion}</td>
                <td className="px-4 py-2 text-center">{item.finProceso}</td>
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

export default HistorialModulos;