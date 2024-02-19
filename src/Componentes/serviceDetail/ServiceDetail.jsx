import { useParams } from "react-router-dom";

import servicios from "../../servicios";
import styles from "../serviceDetail/serviceDetail.module.css";

const ServicesDetail = () => {
  const { serviceId } = useParams();

  const findServiceDetail = parseInt(serviceId);

  const foundService = servicios.find(
    (servicio) => servicio.id === findServiceDetail
  );

  if (foundService) {
    return (
      <>
        <div className={styles.serviceDetailContainer} key={serviceId}>
          <h3>{foundService.title}</h3>

          <div className={styles.medio}>
            <img
              src={foundService.imageDetail}
              className={styles.image}
              alt=""
            />
            <div className={styles.description}>
              <div>{foundService.description}</div>
              <a
                href="https://wa.link/ndjqym"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservá tu turno
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>ERROR</h1>;
  }
};

export default ServicesDetail;
