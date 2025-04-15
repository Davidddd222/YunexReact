"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Documentos from './components/Documentos';
import Soat from './components/Soat';
import SeguroObligatorio from './components/SeguroObligatorio'; // Importamos la opción de Seguro Obligatorio
import PolizaRiesgo from './components/PolizaRiesgo';
import RevisionPluma from './components/RevisionPluma';
import RevisionTecno from './components/RevisionTecno';
import { FaChevronDown, FaChevronRight } from "react-icons/fa6"; // Importamos los íconos

type Section = 'soat' | 'documentos';
type SoatOption = 'seguro-obligatorio' | 'poliza-todo-riesgo' | 'revision-tecnomecanica' | 'revision-pluma-articulada' | 'soat';

const Vehiculos = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('documentos'); // Sección activa
  const [isSoatMenuOpen, setIsSoatMenuOpen] = useState(false); // Estado para manejar el submenú de Soat
  const [activeSoatOption, setActiveSoatOption] = useState<SoatOption | null>(null); // Estado para manejar la opción activa en Soat

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado del sidebar
  };

  const handleNavigation = (section: Section) => {
    setActiveSection(section); // Cambia la sección activa cuando el usuario hace clic en el menú
    if (section !== 'soat') {
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
          className={`fixed lg:relative lg:translate-x-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-56 rounded-sm bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-black h-screen p-4`}
          style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center border-none rounded-sm h-8">Menú</h2>
          <ul>
            {/* Opción Soat con submenú */}
<li className="mb-2">
  <button
    onClick={() => toggleSoatMenu()} // Solo alternamos el estado del submenú, sin cambiar la sección activa
    className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
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
      className={`pl-4 mt-2 bg-transparent rounded-md border-2 text-transparent transition-all duration-300 ease-in-out ${
        isSoatMenuOpen ? 'max-h-64' : 'max-h-0'
      } overflow-hidden`}
    >
                  <li>
                    <a
                      onClick={() => {
                        handleNavigation('soat'); // Cambia la sección activa a "soat"
                        handleSoatOptionChange('soat'); // Cambia la opción activa de Soat
                      }}
                      className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                    >
                      SOAT
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleNavigation('soat'); // Cambia la sección activa a "soat"
                        handleSoatOptionChange('seguro-obligatorio');
                      }}
                      className="block py-2 font-semibold text-sm px-4 rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                    >
                      SEGURO OBLIGATORIO
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleNavigation('soat'); // Cambia la sección activa a "soat"
                        handleSoatOptionChange('poliza-todo-riesgo');
                      }}
                      className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                    >
                      POLIZA TODO RIESGO
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleNavigation('soat'); // Cambia la sección activa a "soat"
                        handleSoatOptionChange('revision-tecnomecanica');
                      }}
                      className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
                    >
                      REVISIÓN TECNOMECÁNICA
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleNavigation('soat'); // Cambia la sección activa a "soat"
                        handleSoatOptionChange('revision-pluma-articulada');
                      }}
                      className="block py-2 px-4 font-semibold text-sm rounded-md text-black hover:bg-blue-600 transition-colors duration-300"
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
                className={`w-full p-2 text-left rounded-md text-base font-semibold transition-colors duration-300 ${
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
          {activeSection === 'soat' && (
            <div>
              {activeSoatOption === 'soat' && <Soat />}
              {activeSoatOption === 'seguro-obligatorio' && <SeguroObligatorio />}
              {activeSoatOption === 'poliza-todo-riesgo' && <PolizaRiesgo />}
              {activeSoatOption === 'revision-tecnomecanica' && <RevisionTecno />}
              {activeSoatOption === 'revision-pluma-articulada' && <RevisionPluma />}
            </div>
          )}
          {activeSection === 'documentos' && <Documentos />}
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
