import { Link } from "react-router-dom";
import styles from "../footer/footer.module.css";
import iconBlanco from "../../assets/logouno.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src={"iconBlanco"}
              alt="logo"
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
        </div>
        <ul className={styles.iconsContainer}>
          <li className={styles.iconsFooter}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2258/2258541.png"
              alt="Email"
            />
            <p>nutricion@gmail.com</p>
          </li>
          <li className={styles.iconsFooter}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/126/126509.png"
              alt="Teléfono"
            />
            <p>1156262545</p>
          </li>
          <li className={styles.iconsFooter}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/561/561115.png"
              alt="Ubicación"
            />
            <p>Buenos aires, Argentina</p>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
