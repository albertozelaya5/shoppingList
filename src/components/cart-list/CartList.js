import { MdDelete, MdEdit } from "react-icons/md";

import styles from "./Cart.module.css";

export default function CartList({ list, onRemoveList, onSelected }) {
  return (
    <article className={styles.tableItems}>
      {list.map(({ article, quantity, description, id }) => (
        <section className={styles.tableItem} key={id}>
          <div className={styles.itemQuant}>
            <h3>{article}</h3>
            <div className={styles.crudOptions}>
              <MdDelete
                //
                onClick={() => onRemoveList(id)}
                className={styles.icons}
                size="20px"
              />

              <h3>Qt: {quantity}</h3>
              <MdEdit
                //
                onClick={() => onSelected(id)}
                className={styles.icons}
                size="20px"
              />
            </div>
          </div>
          <p>{description}</p>
        </section>
      ))}
    </article>
  );
}
