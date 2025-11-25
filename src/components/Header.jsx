import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import SecondaryHeader from "./SecondaryHeader";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.shell}>

        {/* Brand */}
        <div className={styles.brand}>
          <NavLink to="/">
            <img
              src="/src/assets/logo.jpeg"
              alt="Logo"
              className={styles.logoImg}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <button className={styles.cta}>
          <NavLink to="/contact" className={styles.navSpl}>
            <span>Get in Touch</span>
          </NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
