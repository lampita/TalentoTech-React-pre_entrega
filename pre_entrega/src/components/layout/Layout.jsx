// src/components/Layout/Layout.jsx
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      {/* Header fijo en la parte superior */}
      <Header />
      
      {/* Contenedor central que crecerá dinámicamente */}
      <main className={styles.mainContent}>
        {children}
      </main>
      
      {/* Footer fijo en la parte inferior */}
      <Footer />
    </div>
  );
};
