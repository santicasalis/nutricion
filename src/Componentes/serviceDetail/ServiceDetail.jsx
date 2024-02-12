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
            <div className={styles.description}>
              <div>{foundService.description}</div>
              <button>Sacá tu turno</button>
            </div>

            <img
              src={foundService.imageDetail}
              className={styles.image}
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

export default ServicesDetail;
