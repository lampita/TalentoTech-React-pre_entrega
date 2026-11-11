import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import marioImg from "../../assets/images/cart/mariokart.webp"; // Ajusta la ruta a tu imagen

export const Layout = () => {
  useEffect(() => {
    const imgPrecarga = new Image();
    imgPrecarga.src = marioImg;
  }, []);
  return (
    <div className={styles.layoutWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
