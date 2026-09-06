// src/components/Header/Header.jsx
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          PS4<span className={styles.logoAccent}>Store</span>
        </div>

        {/* Barra de navegación */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#inicio" className={styles.navLink}>
                Inicio
              </a>
            </li>
            <li>
              {/* 🌟 REVISÁ ESTA LÍNEA: Asegurate de que haya un ESPACIO entre las dos llaves dentro de las comillas */}
              <a href="#productos" className={`${styles.navLink} ${styles.active}`}>
                Productos
              </a>
            </li>
            <li>
              <a href="#contacto" className={styles.navLink}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Carrito */}
        <div className={styles.cartWidget}>
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.cartBadge}>0</span>
        </div>
      </div>
    </header>
  );
};
