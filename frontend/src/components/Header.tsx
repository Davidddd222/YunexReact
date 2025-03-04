// src/components/Header.tsx
import { Link } from 'react-router-dom';  // Importar desde react-router-dom
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';  // Usar Clerk para React
import { RiNotification2Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button';  // Importar el botón

const Header = () => {
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
                  <Button variant="link" className="text-base">Inicio</Button>
                </Link>
              </li>
              <li>
                <Link to="/reporte-de-hora">
                  <Button variant="link" className="text-base">Reporte de hora</Button>
                </Link>
              </li>
              <li>
                <Link to="/laboratorio">
                  <Button variant="link" className="text-base">Laboratorio</Button>
                </Link>
              </li>
              <li>
                <Link to="/ehs">
                  <Button variant="link" className="text-base">EHS</Button>
                </Link>
              </li>
              <li>
                <Link to="/almacen">
                  <Button variant="link" className="text-base">Almacen</Button>
                </Link>
              </li>
              <li>
                <Link to="/vehicles">
                  <Button variant="link" className="text-base">Vehiculos</Button>
                </Link>
              </li>
              <li>
                <Link to="/garantias">
                  <Button variant="link" className="text-base">Garantías</Button>
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
