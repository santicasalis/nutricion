import styles from "../services/service.module.css";

const Services = ({ title, imagen }) => {
  return (
    <>
      <div className={styles.servicesCard}>
        <h3>{title}</h3>
        <img src={imagen} alt={title} className={styles.servicesCardImg} />
      </div>
    </>
  );
};

export default Services;
