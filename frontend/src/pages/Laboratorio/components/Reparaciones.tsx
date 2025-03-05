import React from 'react';
import EmpezarForm from './EmpezarForm';
import FinalizarForm from './FinalizarForm';

const Reparaciones: React.FC = () => {
    return (
        <div>
            <h1>Reparaciones</h1>
            <p>Bienvenido a la página de reparaciones.</p>
            <EmpezarForm />
            <FinalizarForm />
        </div>
    );
};

export default Reparaciones;