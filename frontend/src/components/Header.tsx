// src/components/Header.tsx
import { Link } from 'react-router-dom';  // Importar desde react-router-dom
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';  // Usar Clerk para React
import { RiNotification2Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button';  // Importar el botón
import { useState } from 'react';

const Header = () => {
  // Estado para controlar la visibilidad de los submenús
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Función para alternar la visibilidad del submenú
  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);  // Si ya está abierto, lo cierra; si no, lo abre
  };


  return (
    <div className="container mx-auto">
      <header className="w-full flex">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 w-full">
          {/* Logo */}
          <div className="relative w-[100px] h-[100px] flex items-center">
            <img
              src="/LogoYunex.svg"
              alt="Logo Yunex"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navegación */}
          <nav>
            <ul className="font-bold font-sans flex space-x-2 items-center">
              <li>
                <Link to="/">
                  <Button variant="link" className="text-base cursor-pointer">Inicio</Button>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => toggleSubmenu('reporte')}
                  className="text-base cursor-pointer font-medium hover:text-gray-300"
                >
                  Reporte de hora
                </button>
                {openSubmenu === 'reporte' && (
                  <div className="absolute mt-2 bg-white  rounded-2xl shadow-lg w-48">
                    <div className="py-1">
                      <Link to="/reporte-de-hora/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Reporte NumberOne
                      </Link>
                      <Link to="/reporte-de-hora/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Reporte NumberTwo
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to="/laboratorio">
                  <Button variant="link" className="text-base cursor-pointer">Laboratorio</Button>
                </Link>
              </li>
              <li>
                <Link to="/ehs">
                  <Button variant="link" className="text-base cursor-pointer">EHS</Button>
                </Link>
              </li>
              <li>
                <Link to="/almacen">
                  <Button variant="link" className="text-base cursor-pointer">Almacen</Button>
                </Link>
              </li>
              <li>
                <Link to="/vehiculos">
                  <Button variant="link" className="text-base cursor-pointer">Vehiculos</Button>
                </Link>
              </li>
              <li>
                <Link to="/garantias">
                  <Button variant="link" className="text-base cursor-pointer">Garantías</Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bloque de autenticación */}
          <div className="text-black flex gap-4 items-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <RiNotification2Line 
              className="text-black h-6 w-7 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
