import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Usamos el contexto global
import { IconoEstrellaVacia } from "../Icons/IconoEstrellaVacia";
import { IconoEstrellaRellena } from "../Icons/IconoEstrellaRellena";
import styles from "./Item.module.css";

export const Item = ({ game }) => {
  const { id, title, price, image } = game;

  const { addToCart, favoritos, toggleFavorito } = useCart();

  const isFavorite = favoritos.includes(id);

  return (
    <div className={styles.gameCard}>
      <Link to={`/producto/${id}`} className={styles.gameImageLink}>
        <div className={styles.gameImageContainer}>
          <img src={image} alt={title} className={styles.gameImage} />
        </div>
      </Link>

      <div className={styles.gameInfo}>
        <div className={styles.titleContainer}>
          <button
            className={`${styles.favoriteBtn} ${isFavorite ? styles.activeFav : ""}`}
            // Ejecutamos la función del contexto pasando el ID de este juego
            onClick={() => toggleFavorito(id)}
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? (
              <IconoEstrellaRellena isActive={true} />
            ) : (
              <IconoEstrellaVacia isActive={false} />
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
