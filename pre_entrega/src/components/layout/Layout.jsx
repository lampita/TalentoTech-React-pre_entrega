import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import marioImg from "../../assets/images/cart/mariokart.webp";

const imgPrecarga = new Image();
export const Layout = () => {
  useEffect(() => {
    imgPrecarga.src = marioImg;
    // Fuerza la decodificación de los píxeles antes de que el usuario abra el carrito
    imgPrecarga.decode().catch(() => {});
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
