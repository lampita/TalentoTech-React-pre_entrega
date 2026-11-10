import { useState } from "react"; // 1. Importamos useState
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import { IconoEstrellaVacia } from "../Icons/IconoEstrellaVacia";
import { IconoEstrellaRellena } from "../Icons/IconoEstrellaRellena";
import styles from "./Item.module.css";

export const Item = ({ game }) => {
  const { id, title, price, image } = game;
  const { addToCart, favoritos, toggleFavorito } = useCart();

  // 2. Estado local para controlar el retardo y deshabilitar el botón
  const [isAdding, setIsAdding] = useState(false);

  const isFavorite = favoritos.includes(id);

  // 3. Función manejadora del click con retardo
  const handleAddToCart = () => {
    setIsAdding(true); // Deshabilita el botón y cambia el texto inmediatamente
    addToCart(game);   // Agrega el juego al carrito

    // Retardo de 1500 milisegundos (1.5 segundos) antes de volver a habilitarlo
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

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
            className={`${styles.favoriteBtn}`}
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
          
          {/* 4. Enlazamos el botón al estado 'isAdding' */}
          <button
            className={`${styles.addToCartBtn} ${isAdding ? styles.btnDisabled : ""}`}
            onClick={handleAddToCart}
            disabled={isAdding} // React se encarga de deshabilitarlo nativamente
          >
            {isAdding ? "¡Agregado! 🛒" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
};
