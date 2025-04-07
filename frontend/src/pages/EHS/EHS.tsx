"use client";

// pages/lab.tsx (o donde tengas tu componente Laboratorio)
import {  } from 'react';
import Header from '@/components/Header';// Importa el componente Ensambles
import GestionAccidentes from './components/GestionAccidentes';

const EHS = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
        <div className="flex-1 p-4 text-center text-2xl font-semibold "><GestionAccidentes />
      </div>
    </div>
  );
};

export default EHS;
