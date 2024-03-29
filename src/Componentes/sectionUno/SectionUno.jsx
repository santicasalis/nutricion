import styles from "../sectionUno/sectionUno.module.css";

function SectionUno() {
  return (
    <>
      <div className={styles.imgSectionUno}>
        <h1>
          Planes personalizados para <br className={styles.brSectionUno} /> tu
          estilo de vida
        </h1>
        <p>
          Descubre cómo la nutrición puede ayudarte
          <br className={styles.brSectionUno} /> a alcanzar tu máximo potencial
        </p>
      </div>
    </>
  );
}

export default SectionUno;
