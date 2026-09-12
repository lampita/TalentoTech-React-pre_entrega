import { ItemList } from "../ItemList/Itemlist";
import { Spinner } from "../Spinner/Spinner";

import { useState, useEffect } from "react";

export function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("/data/productos.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }

        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  if (cargando) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>{Mensaje}</h2>
      <ItemList productos={productos} />
    </div>
  );
}
