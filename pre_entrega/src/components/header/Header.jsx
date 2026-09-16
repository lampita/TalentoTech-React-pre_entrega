import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const { totalItems } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          PS4<span className={styles.logoAccent}>Store</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={`${styles.navLink} ${styles.disabled}`}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/carrito" className={styles.cartWidget}>
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.cartBadge}>{totalItems}</span>
        </NavLink>
      </div>
    </header>
  );
};
