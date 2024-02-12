import Services from "../services/Services";
import styles from "../services/service.module.css";
import servicios from "../../servicios";

import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <div className={styles.serviceListContainer}>
        <h1>Nuestros servicios</h1>
        <div className={styles.serviceList}>
          {servicios.map((servicio) => (
            <div className={styles.servicec}>
              <Link
                className={styles.underline}
                to={`/services/${servicio.id}`}
                key={servicio.id}
              >
                <Services
                  title={servicio.title}
                  description={servicio.description}
                  imagen={servicio.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ServiceList;
