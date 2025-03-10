"use client";

// pages/lab.tsx (o donde tengas tu componente Laboratorio)
import { useState } from 'react';
import Header from '@/components/Header';
import Reparaciones from './components/Reparaciones'; // Importa el componente Reparaciones
import Balance from './components/Balance'; // Importa el componente Balance
import General from './components/General'; // Importa el componente General
import Ensambles from './components/Ensambles'; // Importa el componente Ensambles

type Section = 'reparaciones' | 'balance' | 'general' | 'ensambles';

const Laboratorio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('reparaciones'); // Sección activa

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado del sidebar
  };

  const handleNavigation = (section: Section) => {
    setActiveSection(section); // Cambia la sección activa cuando el usuario hace clic en el menú
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Contenedor principal */}
      <div className="flex">
        {/* Botón para abrir/cerrar el sidebar (solo visible en móviles) */}
        <button
          onClick={toggleSidebar}
          className="fixed lg:hidden z-50 p-2 bg-gray-800 text-white rounded-md m-2"
        >
          {isSidebarOpen ? 'Cerrar' : 'Abrir'}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed lg:relative lg:translate-x-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out w-64 rounded-sm bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white h-screen p-4`}
        >
          <h2 className="text-xl font-semibold mb-4 ml-2">Menú</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('reparaciones')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'reparaciones'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Reparaciones
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('balance')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'balance'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Balance
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('general')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'general'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                General
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('ensambles')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'ensambles'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Ensambles
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          {/* Secciones de contenido */}
          {activeSection === 'reparaciones' && <Reparaciones />}
          {activeSection === 'balance' && <Balance />}
          {activeSection === 'general' && <General />}
          {activeSection === 'ensambles' && <Ensambles />}
        </div>
      </div>
    </div>
  );
};

export default Laboratorio;
