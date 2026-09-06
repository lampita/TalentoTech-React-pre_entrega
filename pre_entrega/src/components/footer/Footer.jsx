// src/components/Footer/Footer.jsx
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Sección Izquierda: Copyright */}
        <div className={styles.copyrightSection}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} <span className={styles.brand}>PS4<span className={styles.logoAccent}>Store</span></span>. Todos los derechos reservados.
          </p>
          <span className={styles.subtext}>Proyecto de práctica React + Vite</span>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className={styles.socialsSection}>
          <h4 className={styles.socialsTitle}>Síguenos</h4>
          <div className={styles.socialLinks}>
            <a href="#instagram" className={styles.socialLink}>
              📸 <span className={styles.socialName}>Instagram</span>
            </a>
            <a href="#twitter" className={styles.socialLink}>
              🐦 <span className={styles.socialName}>X</span>
            </a>
            <a href="#discord" className={styles.socialLink}>
              💬 <span className={styles.socialName}>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};