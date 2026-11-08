import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Inicio } from "./pages/Inicio";
import { DetalleProducto } from "./pages/DetalleProducto";
import { CarritoPage } from "./pages/CarritoPage";
import "./App.css";

function App() {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/productos"
          element={<ItemListContainer Mensaje="Productos" />}
        />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Route>
    </Routes>
  );
}

export default App;