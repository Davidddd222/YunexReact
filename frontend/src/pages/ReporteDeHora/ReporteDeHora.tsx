import Header from "@/components/Header";
import Documentos from "./components/Documentos";
import Soat from "./components/Soat";

const ReporteDeHora: React.FC = () => {
  return (
        <div>
        {/* Contenido de la página */}
        <Header />
        <h1>Reporte de Hora</h1>
        <p>Contenido del reporte de hora...</p>
      <Documentos />
      <Soat />
        </div>
  );
};

export default ReporteDeHora;
