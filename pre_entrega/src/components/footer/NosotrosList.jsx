import { Spinner } from "../Spinner/Spinner";
import { useState, useEffect } from "react";
import styles from "./NosotrosList.module.css";

function NosotrosList({ Mensaje, onCerrar }) {
  const [nosotros, setNosotros] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerNosotros = async () => {
      try {
        const respuesta = await fetch("/data/nosotros.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información del equipo");
        }

        const datos = await respuesta.json();
        setNosotros(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerNosotros();
  }, []);

  if (cargando) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.mensajeErro}>
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.contenedorMain}>
      <div className={styles.contenedorCabecera}>
        <h3>{Mensaje}</h3>

        <button
          className={styles.botonCerrar}
          onClick={onCerrar}
          onMouseOver={(e) => (e.target.style.background = "#c0392b")}
          onMouseOut={(e) => (e.target.style.background = "#e74c3c")}
        >
          ✕
        </button>
      </div>

      <ul className={styles.estiloLista}>
        {nosotros.map((miembro) => (
          <li key={miembro.id} className={styles.tarjeta}>
            <img
              src={miembro.foto}
              alt={miembro.nombre}
              className={styles.foto}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <h3>{miembro.nombre}</h3>
              <span className={styles.fontCargo}>{miembro.cargo}</span>
              <span className={styles.fontMail}>{miembro.mail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NosotrosList;
