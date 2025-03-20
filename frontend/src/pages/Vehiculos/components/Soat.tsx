import React, { useState, useEffect } from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
  } from "@/components/ui/sheet"
import EmpezarForm from '@/pages/Laboratorio/components/EmpezarForm';


const Soat: React.FC = () => {
    // Datos de ejemplo para la tabla
      const [reparacionesData, ] = useState([
        { id: 123, equipo: 'Computador HP', estado: 'En progreso', falla: 'Daño matriz', fecha: '2025-03-10', reparacionEstimada: '5', responsable: 'Juan Pérez' },
        { id: 122, equipo: 'Computador Lenovo', estado: 'En revisión', falla: 'Daño matriz', fecha: '2025-03-10', reparacionEstimada: '1', responsable: 'Juan David' },
      ]);

      // Estado para el valor de búsqueda
      const [query, setQuery] = useState('');
    
      // Estado para los resultados filtrados ¡OJO! filteredReparaciones
      const [, setFilteredSoat] = useState(reparacionesData);
    
      // Manejar el cambio en el input de búsqueda
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
      };
    
      // Filtrar las reparaciones basadas en el query (ahora filtra por ID)
      useEffect(() => {
        if (query === '') {
          setFilteredSoat(reparacionesData);
        } else {
          // Filtra por ID, convierte el query a número
          const filtered = reparacionesData.filter(item =>
            item.id.toString().includes(query)  // Compara el ID convertido a string con el query
          );
          setFilteredSoat(filtered);
        }
      }, [query, reparacionesData]);
    return (
        <div>
            <h1>SOAT Information</h1>
            <p>This is the SOAT information page.</p>
            <Sheet>
            <SheetTrigger
              className="border border-blue-500 mr-4 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Empezar reparación
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-white">
              <SheetTitle></SheetTitle>
              <EmpezarForm />
            </SheetContent>
          </Sheet>

          <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar por ID..."
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
        />
        </div>
    );
};

export default Soat;