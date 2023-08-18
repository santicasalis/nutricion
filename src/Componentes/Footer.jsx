import { Link } from "react-router-dom";
import "../Estilos/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/iconBlanco.jpg" alt="logo" />
          </Link>
        </div>
        <ul className="iconsContainer">
          <li className="iconsFooter">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2258/2258541.png"
              alt="Email"
            />
            <p>nutricion@gmail.com</p>
          </li>
          <li className="iconsFooter">
            <img
              src="https://cdn-icons-png.flaticon.com/128/126/126509.png"
              alt="Teléfono"
            />
            <p>1153522423</p>
          </li>
          <li className="iconsFooter">
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
