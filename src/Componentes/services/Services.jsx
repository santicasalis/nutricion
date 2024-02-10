import styles from "../services/service.module.css";

const Services = ({ title }) => {
  return (
    <>
      <div className={styles.cardHover}>
        <div className={styles.servicesCard}>
          <div>
            {" "}
            <img src={"s"} alt={title} />
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
