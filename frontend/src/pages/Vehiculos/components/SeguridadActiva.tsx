import React, { useState } from 'react';

type CumpleStatus = 'cumple' | 'noCumple' | undefined;

interface FormData {
  [key: string]: CumpleStatus;
}

const SEGURIDAD_ACTIVA_FIELDS = [
  'frenado',
  'direccion',
  'suspension',
  'neumaticos',
  'iluminacion',
  'electrico',
  'climatizacion',
  'espejos',
  'controlEstabilidad'
];

const FIELD_LABELS: Record<string, string> = {
  frenado: 'Sistema de Frenado',
  direccion: 'Dirección',
  suspension: 'Suspensión',
  neumaticos: 'Neumáticos',
  iluminacion: 'Iluminación',
  electrico: 'Sistema Eléctrico',
  climatizacion: 'Climatización',
  espejos: 'Espejos Retrovisores',
  controlEstabilidad: 'Control de Estabilidad'
};

const SeguridadActiva: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(
    SEGURIDAD_ACTIVA_FIELDS.reduce((acc, field) => {
      acc[field] = undefined; // Ninguna opción seleccionada por defecto
      return acc;
    }, {} as FormData)
  );

  const handleChange = (field: string, value: CumpleStatus) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén completos
    const camposIncompletos = SEGURIDAD_ACTIVA_FIELDS.filter(field => !formData[field]);
    
    if (camposIncompletos.length > 0) {
      alert(`Por favor complete los siguientes campos: ${camposIncompletos.join(', ')}`);
      return;
    }
    
    console.log('Datos guardados:', formData);
    // Lógica para guardar los datos
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 py-10'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 overflow-y-auto max-h-screen">
       <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Seguridad Activa</h1>

      <form onSubmit={handleSubmit}>
        {SEGURIDAD_ACTIVA_FIELDS.map((field) => (
          <div key={field}>
            <label className='block text-base font-medium text-gray-700 mb-2'>{FIELD_LABELS[field]}</label>
            <div>
              <select className="w-full px-4 py-3 rounded-md border border-gray-300  mb-2"
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value as CumpleStatus)}
              >
                <option value={undefined}>Seleccione una opción</option>
                <option value="cumple">Cumple</option>
                <option value="noCumple">No Cumple</option>
              </select>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
      </div>
    </div>
  );
};

export default SeguridadActiva;
