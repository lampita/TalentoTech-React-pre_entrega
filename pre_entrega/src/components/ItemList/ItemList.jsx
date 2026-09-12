import styles from "./ItemList.module.css";
import { Item } from "../Item/Item";
export function ItemList({ productos }) {
  return (
    <>
      <div className={styles.cardGrid}>
        {productos.map((prod) => (
          <Item key={prod.id} game={prod} />
        ))}
      </div>
    </>
  );
}
