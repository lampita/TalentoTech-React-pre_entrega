import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { IconoEstrellaVacia } from "./IconoEstrellaVacia";
import { IconoEstrellaRellena } from "./IconoEstrellaRellena";
import styles from "./Item.module.css";

export const Item = ({ game }) => {
  const { title, price, image, favorito = false } = game;

  const { addToCart } = useCart(); // 🌟 Extraemos la función del Context

  const [isFavorite, setIsFavorite] = useState(favorito);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImageContainer}>
        <img src={image} alt={title} className={styles.gameImage} />
      </div>

      <div className={styles.gameInfo}>
        <div className={styles.titleContainer}>
          <button
            className={`${styles.favoriteBtn} ${isFavorite ? styles.activeFav : ""}`}
            onClick={toggleFavorite}
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? (
              <IconoEstrellaRellena className={styles.starIcon} />
            ) : (
              <IconoEstrellaVacia className={styles.starIcon} />
            )}
          </button>

          <h3 className={styles.gameTitle}>{title}</h3>
        </div>

        <div className={styles.gameFooter}>
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>
              $ {price ? price.toLocaleString("es-AR") : " N/D "}
            </span>
          </div>
          <button
            className={styles.addToCartBtn}
            onClick={() => addToCart(game)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
