import React, { useState } from 'react';
import Search from '@/components/ui/search';
import { Sheet, SheetContent,SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import EmpezarForm from '@/pages/Laboratorio/components/EmpezarForm';

const RevisionPluma: React.FC = () => {
    
        const [reparacionesData] = useState([
                        { placa: "ABC 123", vehiculo: 'Computador HP', numero: '123456', fechaExpedicion: '2021-10-01', fechaVencimiento: '2022-10-01', riesgo: 'Alto' },
                      ]);

const [filteredDocumentos, setFilteredDocumentos] = useState(reparacionesData);
      
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-900 mb-2'>VEHICLES</h1>
            <p className='text-xl font-semibold text-center text-gray-900 mb-6'>This is the Revisión pluma articulada information page.</p>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Sheet>
               <SheetTrigger
                 className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Ingresar vehículo
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                  </SheetDescription>
                 </SheetTitle>
                <EmpezarForm />
               </SheetContent>
              </Sheet>

           <div className="flex-1 ">
           <Search
  data={reparacionesData}
  setFilteredData={setFilteredDocumentos}
/>
        </div>
       </div>
       <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Placa</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Clase de vehículo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Número</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha de expedición</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Fecha de vencimiento</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Riesgo</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocumentos.map((item) => (
              <tr key={item.placa} className="border-t">
                <td className="px-4 py-2 text-center">{item.placa}</td>
                <td className="px-4 py-2">{item.vehiculo}</td>
                <td className="px-4 py-2 text-center">{item.numero}</td>
                <td className="px-4 py-2 text-center">{item.fechaExpedicion}</td>
                <td className="px-4 py-2 text-center">{item.fechaVencimiento}</td>
                <td className="px-4 py-2 text-center">{item.riesgo}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default RevisionPluma;