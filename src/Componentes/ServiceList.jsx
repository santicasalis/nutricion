import Services from "./Services";

import servicios from "../servicios";
import "D:/nutricion-flor/nutricion-flor/src/Estilos/services.css";
import { Link } from "react-router-dom";

export const ServiceList = () => {
  return (
    <>
      <div className="serviceListContainer">
        <h1>Nuestros servicios</h1>
        <div className="serviceList">
          {servicios.map((servicio) => (
            <Link
              className="underline"
              to={`/services/${servicio.id}`}
              key={servicio.id}
            >
              <Services
                title={servicio.title}
                description={servicio.description}
                imagen={servicio.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
