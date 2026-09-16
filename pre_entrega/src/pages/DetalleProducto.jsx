import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconoEstrellaRellena } from "../components/Item/IconoEstrellaRellena";
import { Spinner } from "../components/Spinner/Spinner";
import styles from "./DetalleProducto.module.css";

export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductoDetalle = async () => {
      try {
        const respuesta = await fetch("/data/productos.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo conectar con la base de datos");
        }

        const datos = await respuesta.json();

        const juegoEncontrado = datos.find((juego) => juego.id === Number(id));

        if (!juegoEncontrado) {
          throw new Error("El juego solicitado no existe en nuestro catálogo");
        }

        setProducto(juegoEncontrado);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductoDetalle();
  }, [id]);

  if (cargando) return <Spinner />;
  if (error) return <p className={styles.errorText}>Error: {error}</p>;

  const totalEstrellas = Array(producto.stars || 0).fill(0);

  return (
    <div className={styles.detalleContainer}>
      <span className={styles.warningIcon}>⚠️</span>
      <h2 className={styles.pageTitle}>Ficha de Producto en Construcción</h2>

      <div className={styles.productPreview}>
        <div className={styles.imageWrapper}>
          <img
            src={producto.image}
            alt={producto.title}
            className={styles.gameImage}
          />
        </div>

        <h3 className={styles.gameTitle}>{producto.title}</h3>

        <div className={styles.starsContainer}>
          {totalEstrellas.map((_, index) => (
            <IconoEstrellaRellena key={index} className={styles.starIcon} />
          ))}
          <span className={styles.starsLabel}>({producto.stars} / 5)</span>
        </div>
      </div>

      <button
        className={styles.goBackBtn}
        onClick={() => navigate("/productos")}
      >
        Volver al Catálogo
      </button>
    </div>
  );
};
