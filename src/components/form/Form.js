import { useState, useEffect } from "react";

import styles from "./Form.module.css";

export default function Form({ list, onAddList, onUpdateList, item }) {
  const id = crypto.randomUUID();
  const [article, setArticle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (item) {
      setArticle(item.article);
      setQuantity(item.quantity);
      setDescription(item.description);
    }
  }, [item]);

  const clearItems = function () {
    setArticle("");
    setQuantity(1);
    setDescription("");
  };

  const onSubmit = function (e) {
    e.preventDefault();

    if (!article || !description) return;

    const alreadyExist = list.some((article) => article.id === item?.id);
    const newArticle = { article, quantity, description, id: item?.id };

    if (alreadyExist) {
      onUpdateList(newArticle);
      return clearItems();
    }

    onAddList({ article, quantity, description, id });

    clearItems();
  };

  return (
    <aside>
      <h2>Add an Item</h2>

      <form className={styles.form} onSubmit={onSubmit}>
        <ul className={styles.formList}>
          <Item name="Name">
            <input
              //
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </Item>

          <Item name="Quantity">
            <input
              //
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </Item>

          <Item name="Description">
            <textarea
              //
              rows="4"
              value={description}
              onChange={(e) => {
                if (!Number.isNaN(e.target.value)) setDescription(e.target.value);
              }}
            ></textarea>
          </Item>
        </ul>

        <div className={styles.buttonCenter}>
          <button className={styles.button}>Add Item</button>
        </div>
      </form>
    </aside>
  );
}

function Item({ name, children }) {
  return (
    <li className={styles.list}>
      <label className={styles.formLabel}>
        <strong>{name}</strong>
      </label>
      {children}
    </li>
  );
}
