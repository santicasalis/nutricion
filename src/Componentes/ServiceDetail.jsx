import { useParams } from "react-router-dom";

import servicios from "../servicios";

import "D:/nutricion-flor/nutricion-flor/src/Estilos/serviceDetail.css";

export const ServicesDetail = () => {
  const { serviceId } = useParams();

  const findServiceDetail = parseInt(serviceId);

  const foundService = servicios.find(
    (servicio) => servicio.id === findServiceDetail
  );

  if (foundService) {
    return (
      <>
        <div className="serviceDetailContainer" key={serviceId}>
          <h3>{foundService.title}</h3>
          <div className="medio">
            <div>{foundService.description}</div>

            <img
              src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG51dHJpY2lvbiUyMGRlcG9ydGl2YXxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </div>
      </>
    );
  } else {
    return <h1>ERROR</h1>;
  }
};
