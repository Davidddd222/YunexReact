import { Routes, Route, Navigate } from 'react-router-dom'; // Elimina BrowserRouter
import { useAuth } from '@clerk/clerk-react';
import HomePage from './pages/HomePage';
import SignInPage from './pages/auth/sign-in/SignIn';
import SignUpPage from './pages/auth/sign-up/SignUp';

const App: React.FC = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='bg'>
    <Routes>
      {/* Redirige a Home si está logueado */}
      <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to="/sign-in" />} />
      
      {/* Ruta de inicio de sesión */}
      <Route path="/sign-in" element={
        !isSignedIn ? (
          <SignInPage />
        ) : (
          <Navigate to="/" />  // Redirige al Home si ya está logueado
        )
      } />
      
      {/* Ruta de registro */}
      <Route path="/sign-up" element={
        !isSignedIn ? (
          <SignUpPage />
        ) : (
          <Navigate to="/" />  // Redirige al Home si ya está logueado
        )
      } />
    </Routes>
    </div>
  );
};

export default App;
