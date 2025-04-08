import { Routes, Route,  } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import ReporteDeHora from './pages/ReporteDeHora/ReporteDeHora';
import Laboratorio from './pages/Laboratorio/Laboratorio';
import EHS from './pages/EHS/EHS';
import Almacen from './pages/Almacen/Almacen';
import Vehiculos from './pages/Vehiculos/Vehiculos';
import Garantias from './pages/Garantias/Garantias';
import SeguroObligatorio from './pages/Vehiculos/components/SeguroObligatorio';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const {  isLoaded } = useAuth();

  // Mientras Clerk está cargando la información, muestra un loading.
  if (!isLoaded) {
    return <div>Loading...</div>; // Aquí puedes personalizar con un spinner o algo más
  }

  return (
    <div className='bg'>
      <Routes>
        {/* Redirige a Home si está logueado */}
        <Route path="/" element={ <HomePage />} />
        
        {/* Ruta de inicio de sesión 
        <Route path="/sign-in" element={
          !isSignedIn ? (
            <SignInPage />
          ) : (
            <Navigate to="/" />  // Redirige al Home si ya está logueado
          )
        } /> */}
        
        {/* Ruta de registro 
        <Route path="/sign-up" element={
          !isSignedIn ? (
            <SignUpPage />
          ) : (
            <Navigate to="/" />  // Redirige al Home si ya está logueado
          )
        } /> */}

        <Route path="/reporte-de-hora" element={<ReporteDeHora />} />  {/* Ruta para ReporteDeHora */}
        <Route path="/laboratorio" element={<Laboratorio />} />  {/* Ruta para Laboratorio */}
        <Route path="/ehs" element={<EHS />} />  {/* Ruta para EHS */}
        <Route path="/almacen" element={<Almacen />} />  {/* Ruta para Almacen */}
        <Route path="/vehiculos" element={<Vehiculos />} />  {/* Ruta para Vehicles */}
        <Route path="/garantias" element={<Garantias />} />  {/* Ruta para Garantias */}
        <Route path="/seguro-obligatorio" element={<SeguroObligatorio />} />  {/* Ruta para Garantias */}
      </Routes>
    </div>
  );
};

export default App;
