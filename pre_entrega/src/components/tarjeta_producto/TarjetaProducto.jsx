import styles from "./TarjetaProducto.module.css";

export const TarjetaProducto = ({ game }) => {
  // Desestructuramos las propiedades del juego que pases por props
  const { title, price, image } = game;

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImageContainer}>
        <img src={image} alt={title} className={styles.gameImage} />
      </div>

      <div className={styles.gameInfo}>
        <h3 className={styles.gameTitle}>{title}</h3>

        <div className={styles.gameFooter}>
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
