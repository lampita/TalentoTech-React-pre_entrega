import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { BotonTriangulo } from "../components/BotonesMando/BotonTriangulo";
import { BotonEquis } from "../components/BotonesMando/BotonEquis";
import { BotonCuadrado } from "../components/BotonesMando/BotonCuadrado";
import { BotonCirculo } from "../components/BotonesMando/BotonCirculo";
import styles from "./CarritoPage.module.css";

export const CarritoPage = () => {
  const {
    cart,
    totalPrice,
    addToCart,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <img
          src="/cart/mariokart.png"
          alt="Carrito Vacío"
          className={styles.marioImage}
        />
        <h2 className={styles.title}>Carrito vacío !</h2>

        <button
          className={styles.goBackBtn}
          onClick={() => navigate("/productos")}
        >
          Ir a Productos
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cartPageContainer}>
      <h2 className={styles.pageTitle}>Carrito de Compras</h2>

      <div className={styles.cartContent}>
        <div className={styles.itemsList}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
              </div>

              <div className={styles.itemDetails}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemPrice}>
                  $ {item.price.toLocaleString("es-AR")} c/u
                </span>
                <div className={styles.quantityDisplay}>
                  <span>
                    Cantidad: <strong>{item.quantity}</strong>
                  </span>
                </div>
              </div>

              <div className={styles.itemSubtotalSection}>
                <span className={styles.subtotalValue}>
                  $ {(item.price * item.quantity).toLocaleString("es-AR")}
                </span>
              </div>

              <div className={styles.dpadContainer}>
                <BotonTriangulo
                  className={`${styles.dpadBtn} ${styles.topBtn}`}
                  onClick={() => addToCart(item)}
                />

                <BotonCuadrado
                  className={`${styles.dpadBtn} ${styles.leftBtn}`}
                  onClick={() => removeItem(item.id)}
                />

                <BotonCirculo
                  className={`${styles.dpadBtn} ${styles.rightBtn}`}
                  onClick={() => navigate("/productos")}
                />

                <BotonEquis
                  className={`${styles.dpadBtn} ${styles.bottomBtn}`}
                  onClick={() => decreaseQuantity(item.id)}
                />
              </div>
            </div>
          ))}

          <button className={styles.clearCartBtn} onClick={clearCart}>
            Vaciar Carrito 🗑️
          </button>
        </div>


        <div className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>Resumen del Pedido</h3>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${totalPrice.toLocaleString("es-AR")}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Envío</span>
            <span className={styles.freeShipping}>Gratis</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.totalRow}>
            <span>Total General:</span>
            <span className={styles.totalAmount}>
              ${totalPrice.toLocaleString("es-AR")}
            </span>
          </div>

          <button
            className={styles.checkoutBtn}
            onClick={() => alert("Procesando pago ...")}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};
