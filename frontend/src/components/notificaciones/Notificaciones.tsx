import { RiNotification2Line } from 'react-icons/ri';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Notificaciones: React.FC = () => {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger>
          <RiNotification2Line
            className="text-balck h-6 w-6 cursor-pointer hover:text-gray-800 transition-colors duration-200"
          />
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 bg-white shadow-xl rounded-md border border-gray-100 mr-4 mt-2 overflow-hidden"
          align="end"
        >
          {/* Header */}
          <div className="border-b border-gray-100 px-4 py-3">
            <h3 className="font-medium text-gray-900">Notificaciones</h3>
          </div>

          {/* Lista */}
          <div className="divide-y divide-gray-100">
            {/* Item de ejemplo */}
            <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700">Nueva actualización disponible</p>
                <span className="text-xs text-gray-400">2 min</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Versión 2.3.1</p>
            </div>

            {/* Item de ejemplo 2 */}
            <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700">Mensaje recibido</p>
                <span className="text-xs text-gray-400">1h</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">De: Soporte técnico</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-4 py-2 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Ver todas
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Notificaciones;