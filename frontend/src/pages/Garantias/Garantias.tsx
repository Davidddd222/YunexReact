"use client";

import Header from "@/components/Header";
import { useState } from 'react';
import SubArchivos from "./components/archivos";
import SubBalance from "./components/subBalance";
import SubGarantias from "./components/subGarantias";
import SubGeneral from "./components/subGeneral";

type Section = 'subGarantias' | 'subGeneral' | 'subBalance' | 'archivos';

const Garantias = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('subGarantias'); // Sección activa

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
                onClick={() => handleNavigation('subGarantias')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'subGarantias'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Garantias
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('subBalance')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'subBalance'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                General (Inutilizado) {/* Hasta averiguar su funcionalidad */}
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('subGeneral')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'subGeneral'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Balance (Inutilizado) {/* Hasta averiguar su funcionalidad */}
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('archivos')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'archivos'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Archivos {/* Terminar de averiguar su funcionalidad */}
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          {/* Secciones de contenido */}
          {activeSection === 'subGarantias' && <SubGarantias />}
          {activeSection === 'subGeneral' && <SubGeneral />}
          {activeSection === 'subBalance' && <SubBalance />}
          {activeSection === 'archivos' && <SubArchivos />}
        </div>
      </div>
    </div>
  );
};

export default Garantias;
