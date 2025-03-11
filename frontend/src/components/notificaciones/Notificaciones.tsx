import { RiNotification2Line } from 'react-icons/ri';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Notificaciones: React.FC = () => {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger>
          <RiNotification2Line
            className="text-black h-6 w-7 cursor-pointer hover:text-gray-300 transition-colors duration-300"
          />
        </PopoverTrigger>
        <PopoverContent className="w-72 p-4 mr-2 bg-white shadow-lg rounded-lg">
          {/* Título */}
          <h3 className="font-semibold text-lg text-gray-700 mb-2">Notificaciones</h3>

          {/* Lista de notificaciones */}
          <div className="space-y-2">
            {/* Notificación 1 de ejemplo */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">Notificación de ejemplo</div>
              <span className="text-xs text-gray-400">Hace 5 min</span>
            </div>
          </div>

          {/* Botón para ver más */}
          <button className="mt-3 cursor-pointer text-blue-500 text-sm hover:text-blue-700">
            Ver más
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Notificaciones;
