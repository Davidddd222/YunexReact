// C:\YunexReact\frontend\src\components\ui\estadoRiesgo.tsx
import React from 'react';

interface EstadoRiesgoProps {
  estado: 'VENCIDO' | 'POR VENCER' | 'AL DÍA';
}

const EstadoRiesgo: React.FC<EstadoRiesgoProps> = ({ estado }) => {
  // Determinamos el color según el estado
  const getColor = (estado: string) => {
    switch (estado) {
      case 'VENCIDO':
        return 'bg-red-500';
      case 'POR VENCER':
        return 'bg-yellow-500';
      case 'AL DÍA':
        return 'bg-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center">
      <div className={`w-3 h-3 ${getColor(estado)} rounded-full mr-2`}></div>
      <span>{estado}</span>
    </div>
  );
};

export default EstadoRiesgo;
