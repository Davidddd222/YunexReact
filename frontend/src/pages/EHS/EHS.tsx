"use client";

// pages/lab.tsx (o donde tengas tu componente Laboratorio)
import { useState } from 'react';
import Header from '@/components/Header';// Importa el componente Ensambles
import GestionAccidentes from './components/GestionAccidentes';

type Section = 'equipos'; // Tipos de secciones

const EHS = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('equipos'); // Sección activa

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
          } transition-transform duration-300 ease-in-out w-56 rounded-sm bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-black h-screen p-4`}
          style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center border-none bg-gray-200 rounded-sm h-8">Yunex Traffic</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('equipos')}
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
                  activeSection === 'equipos'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Equipos
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          {/* Secciones de contenido */}
          {activeSection === 'equipos' && <GestionAccidentes />}
        </div>
      </div>
    </div>
  );
};

export default EHS;
