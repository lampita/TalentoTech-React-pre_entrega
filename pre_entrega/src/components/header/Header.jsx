import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          PS4<span className={styles.logoAccent}>Store</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#inicio" className={styles.navLink}>
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#productos"
                className={`${styles.navLink} ${styles.active}`}
              >
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
        <div className={styles.cartWidget}>
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.cartBadge}>0</span>
        </div>
      </div>
    </header>
  );
};
