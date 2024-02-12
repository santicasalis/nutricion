import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css";
import logouno from "../../assets/logotres.png";
const NavItem = ({ label, path }) => (
  <li className={styles.navbar__listItem}>
    <Link to={path} className={styles.navbar__link}>
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    { label: "Sobre Mi", path: "/me" },
    { label: "Contacto", path: "/contact" },
    { label: "Servicios", path: "/services" },
  ];

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__nav}>
        <Link to="/" className={styles.navbarLogo}>
          <img
            src={logouno}
            style={{ width: "100px", marginTop: "0.5rem" }}
            alt=""
          />
        </Link>
        <ul
          className={`${styles.navbar__list} ${
            isMenuOpen ? styles.navbar__open : styles.navbar__closed
          }`}
          onClick={closeMenu}
        >
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
        <button className={styles.navbar__menuButton} onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
