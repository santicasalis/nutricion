import styles from "../sectionUno/sectionUno.module.css";
import portada from "../../assets/portadados.png";
function SectionUno() {
  return (
    <>
      <div className={styles.imgSectionUno}>
        {/* <img className={styles.imgSize} src={portada} alt="" srcset="" /> */}
        <h1>Planes personalizados para tu estilo de vida</h1>
      </div>
    </>
  );
}

export default SectionUno;
