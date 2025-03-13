"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Documentos from './components/Documentos';
import Soat from './components/Soat';
import { FaChevronDown, FaChevronRight } from "react-icons/fa6"; // Importamos ambos íconos

type Section = 'soat' | 'documentos';

const Vehiculos = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('soat'); // Sección activa
  const [isSoatMenuOpen, setIsSoatMenuOpen] = useState(false); // Estado para manejar el submenú de Soat

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado del sidebar
  };

  const handleNavigation = (section: Section) => {
    setActiveSection(section); // Cambia la sección activa cuando el usuario hace clic en el menú
    if (section !== 'soat') {
      setIsSoatMenuOpen(false); // Cierra el submenú de Soat si se cambia de sección
    }
  };

  const toggleSoatMenu = () => {
    setIsSoatMenuOpen(!isSoatMenuOpen); // Alterna el estado del submenú de Soat
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
            {/* Opción Soat con submenú */}
            <li className="mb-2">
            <button
                onClick={() => {
                  handleNavigation('soat');
                  toggleSoatMenu(); // Alternar la visibilidad del submenú de Soat
                }}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'soat'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                } flex justify-between`} // Usamos flex y justify-between para distribuir el espacio
              >
                Soat
                {isSoatMenuOpen ? (
                  <FaChevronDown className="inline ml-2 mt-1" />
                ) : (
                  <FaChevronRight className="inline ml-2 mt-1" />
                )}
              </button>

              {/* Submenú de Soat */}
              {isSoatMenuOpen && (
                <ul
                className={`pl-4 mt-2 bg-transparent rounded-md transition-all duration-300 ease-in-out ${
                  isSoatMenuOpen ? 'max-h-64' : 'max-h-0'
                } overflow-hidden`} 
              >
                <li>
                  <a
                    href="seguro-obligatorio"
                    className="block py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    SEGURO OBLIGATORIO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    POLIZA TODO RIESGO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    REVISIÓN TECNOMECÁNICA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    REVISIÓN PLUMA ARTICULADA
                  </a>
                </li>
              </ul>
              
              )}
            </li>

            {/* Opción Documentos */}
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('documentos')}
                className={`w-full p-2 text-left rounded-md text-lg font-semibold transition-colors duration-300 ${
                  activeSection === 'documentos'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Documentos
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          {/* Secciones de contenido */}
          {activeSection === 'soat' && <Soat />}
          {activeSection === 'documentos' && <Documentos />}
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
