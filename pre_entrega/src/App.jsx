import "./App.css";
import { TarjetaProducto } from "./components/tarjeta_producto/TarjetaProducto";
import { Layout } from "./components/layout/Layout";

function App() {
  // Tu juego de prueba actual
  const juegoDePrueba = {
    id: 1,
    title: "God of War Ragnarök",
    price: 59.99,
    image: "https://placeholder.com",
  };
  const games = [
    {
      id: 1,
      title: "Ace-Combat-8-Skies",
      price: 32.2,
      image: "Ace-Combat-8-Skies.jpg",
    },
    {
      id: 2,
      title: "Airport-Simulator-Day-Night-1",
      price: 19.5,
      image: "Airport-Simulator-Day-Night-1.jpg",
    },
    {
      id: 3,
      title: "Alan-Wake-Remastered",
      price: 8.2,
      image: "Alan-Wake-Remastered.jpg",
    },
  ];

  return (
    <Layout>
      {/* Todo lo que escribas acá dentro se renderizará automáticamente en el {children} del Layout */}
      <h2 style={{ marginBottom: "24px", fontFamily: "Space Grotesk" }}>
        Catálogo Destacado
      </h2>

      {/* Contenedor para probar tu tarjeta */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        <TarjetaProducto game={juegoDePrueba} />
      </div>
    </Layout>
  );
}

export default App;
