import styles from "./Footer.module.css";
import { useState } from "react";
import NosotrosList from "./NosotrosList";

function Footer() {
  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const toggleNosotros = () => setMostrarNosotros((prev) => !prev);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyrightSection}>
          <span className={styles.text}>
            <span className={styles.brand}>
              PS4<span className={styles.logoAccent}>Store</span>
            </span>
          </span>
          <span className={styles.subtext}>
            © 2026 Todos los derechos reservados.
          </span>
        </div>

        <nav className={styles.navSection}>
          <button
            className={`${styles.button} ${mostrarNosotros ? styles.buttonActive : ""}`}
            onClick={(e) => {
              e.preventDefault();
              toggleNosotros();
            }}
          >
            Acerca de Nosotros
          </button>

          {mostrarNosotros && (
            <div className={styles.modalWrapper}>
              <NosotrosList
                Mensaje="Nuestro Equipo"
                onCerrar={toggleNosotros}
              />
            </div>
          )}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
