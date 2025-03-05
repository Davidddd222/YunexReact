import React from 'react';

const EmpezarForm: React.FC = () => {
    return (
        <div>
            <h1>Empezar Formulario</h1>
            <form>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default EmpezarForm;