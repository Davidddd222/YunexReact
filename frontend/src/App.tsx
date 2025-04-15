import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import ReporteDeHora from './pages/ReporteDeHora/ReporteDeHora';
import Laboratorio from './pages/Laboratorio/Laboratorio';
import EHS from './pages/EHS/EHS';
import Almacen from './pages/Almacen/Almacen';
import Vehiculos from './pages/Vehiculos/Vehiculos';
import Garantias from './pages/Garantias/Garantias';
import SeguroObligatorio from './pages/Vehiculos/components/SeguroObligatorio';
import HomePage from './pages/HomePage';
import SignInPage from './pages/auth/sign-in/SignIn';
import SignUpPage from './pages/auth/sign-up/SignUp';

const App: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();

  // Mientras Clerk está cargando la información, muestra un loading.
  if (!isLoaded) {
    return <div className="loading-spinner">Loading...</div>; // Un spinner aquí en lugar de un texto plano
  }  

  return (
    <div className="bg">
      <Routes>
        {/* Ruta principal - redirige según estado de autenticación */}
        <Route
          path="/"
          element={isSignedIn ? <HomePage /> : <Navigate to="/sign-in" />}
        />
        
        {/* Ruta de inicio de sesión */}
        <Route path="/sign-in" element={!isSignedIn ? <SignInPage /> : <Navigate to="/" />} />
        
        {/* Ruta de registro (Sign Up) */}
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Rutas protegidas */}
        <Route path="/reporte-de-hora" element={isSignedIn ? <ReporteDeHora /> : <Navigate to="/sign-in" />} />
        <Route path="/laboratorio" element={isSignedIn ? <Laboratorio /> : <Navigate to="/sign-in" />} />
        <Route path="/ehs" element={isSignedIn ? <EHS /> : <Navigate to="/sign-in" />} />
        <Route path="/almacen" element={isSignedIn ? <Almacen /> : <Navigate to="/sign-in" />} />
        <Route path="/vehiculos" element={isSignedIn ? <Vehiculos /> : <Navigate to="/sign-in" />} />
        <Route path="/garantias" element={isSignedIn ? <Garantias /> : <Navigate to="/sign-in" />} />
        <Route path="/seguro-obligatorio" element={isSignedIn ? <SeguroObligatorio /> : <Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
};

export default App;
