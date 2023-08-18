import { useState } from "react";
import { Link } from "react-router-dom";

import "D:/nutricion-flor/nutricion-flor/src/Estilos/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/iconBlanco.jpg" alt="logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="underline" to="/me">
              Quien soy
            </Link>
          </li>
          <li>
            <Link className="underline" to="/services">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="underline" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
