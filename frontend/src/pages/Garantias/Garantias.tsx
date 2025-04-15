"use client";

import Header from "@/components/Header";
import { useState } from 'react';
import SubBalance from "./components/subBalance";
import SubGarantias from "./components/subGarantias";
import SubGeneral from "./components/subGeneral";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import Formatos from "./components/Formatos";
import Procesos from "./components/Procesos";
import HistorialModulos from "./components/HistorialModulos";

type Section = 'subGarantias' | 'subGeneral' | 'subBalance' | 'archivos';
type SoatOption = 'formatos' | 'procesos' | 'historial-modulos' ;

const Garantias = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('subGarantias'); // Sección activa
    const [isSoatMenuOpen, setIsSoatMenuOpen] = useState(false); // Estado para manejar el submenú de Soat
    const [activeSoatOption, setActiveSoatOption] = useState<SoatOption | null>(null); // Estado para manejar la opción activa en Soat

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado del sidebar
  };

  const handleNavigation = (section: Section) => {
    setActiveSection(section); // Cambia la sección activa cuando el usuario hace clic en el menú
    if (section !== 'archivos') {
      setIsSoatMenuOpen(false); // Cierra el submenú de Soat si se cambia de sección
      setActiveSoatOption(null); // Resetea la opción activa de Soat
    }
  };

  const toggleSoatMenu = () => {
    setIsSoatMenuOpen(!isSoatMenuOpen); // Alterna el estado del submenú de Soat
  };

  const handleSoatOptionChange = (option: SoatOption) => {
    setActiveSoatOption(option); // Cambia la opción activa de Soat
  };

  return (
    <div className="min-h-screen bg-white">
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
          <h2 className="text-xl font-semibold mb-4 text-center border-none rounded-sm h-8">Menú</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('subGarantias')}
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
                  activeSection === 'subGarantias'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Garantías
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('subBalance')}
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
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
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
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
                onClick={() => toggleSoatMenu()} // Solo alternamos el estado del submenú, sin cambiar la sección activa
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
                  activeSection === 'archivos'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                } flex justify-between`} // Usamos flex y justify-between para distribuir el espacio
              >
                Archivos
                {isSoatMenuOpen ? (
                  <FaChevronDown className="inline ml-2 mt-1" />
                ) : (
                  <FaChevronRight className="inline ml-2 mt-1" />
                )}
              </button>
            
              {/* Submenú de Soat */}
              {isSoatMenuOpen && (
                <ul
                  className={`pl-4 mt-2 bg-transparent rounded-md text-transparent text-base border-2 transition-all duration-300 ease-in-out ${
                    isSoatMenuOpen ? 'max-h-64' : 'max-h-0'
                  } overflow-hidden`}
                >
                              <li>
                                <a
                                  onClick={() => {
                                    handleNavigation('archivos'); // Cambia la sección activa a "soat"
                                    handleSoatOptionChange('formatos');
                                  }}
                                  className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                                >
                                  FORMATOS
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => {
                                    handleNavigation('archivos'); // Cambia la sección activa a "soat"
                                    handleSoatOptionChange('procesos');
                                  }}
                                  className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                                >
                                  PROCESOS
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => {
                                    handleNavigation('archivos'); // Cambia la sección activa a "soat"
                                    handleSoatOptionChange('historial-modulos');
                                  }}
                                  className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                                >
                                   HITORIAL DE MÓDULOS
                                </a>
                              </li>
                            </ul>
                          )}
                        </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          {/* Secciones de contenido */}
          {activeSection === 'archivos' && (
            <div>
              {activeSoatOption === 'formatos' && <Formatos />}
              {activeSoatOption === 'procesos' && <Procesos />}
              {activeSoatOption === 'historial-modulos' && <HistorialModulos />}
            </div>
            )}
          {activeSection === 'subGarantias' && <SubGarantias />}
          {activeSection === 'subGeneral' && <SubGeneral />}
          {activeSection === 'subBalance' && <SubBalance />}
        </div>
      </div>
    </div>
  );
};

export default Garantias;
