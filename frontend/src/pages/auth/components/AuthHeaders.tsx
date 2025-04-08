// src/components/Header.tsx
import { Link } from 'react-router-dom';  // Importar desde react-router-dom
import { Button } from '@/components/ui/button';  // Importar el botón
import Notificaciones from '@/components/notificaciones/Notificaciones';

const AuthHeader = () => {
  return (
    <div className="container mx-auto">
      <header className="w-full flex">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 w-full">
          {/* Logo */}
          <Link to="/">
          <div className="relative w-[100px] h-[100px] flex items-center">
            <img
              src="/LogoYunex.svg"
              alt="Logo Yunex"
              className="w-full h-full object-contain"
            />
          </div>
          </Link>

          {/* Navegación */}
          <nav>
            <ul className="font-bold font-sans flex space-x-2 items-center">
              <li>
                <Link to="/">
                  <Button variant="link" className="text-base cursor-pointer">Inicio</Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button variant="link" className="text-base cursor-pointer">Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button variant="link" className="text-base cursor-pointer">Index</Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bloque de autenticación */}
          <div className="text-black flex gap-4 items-center">
            

            {/* Notificaciones */}
            <Notificaciones />
          </div>
        </div>
      </header>
    </div>
  );
};

export default AuthHeader;
