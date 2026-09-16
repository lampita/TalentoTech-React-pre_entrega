
import { Header } from "../Header/Header";
import  Footer  from "../Footer/Footer";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />

      <main className={styles.mainContent}>{children}</main>

      <Footer />
    </div>
  );
};


