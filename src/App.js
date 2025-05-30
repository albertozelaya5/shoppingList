import { useState } from "react";
import { Fragment } from "react";

import "./Styles.css";
import shoppingList from "./data/data.json";
import CartList from "./components/cart-list/CartList";
import Form from "./components/form/Form";

export default function App() {
  const [list, setList] = useState(shoppingList);
  const [item, setItem] = useState();

  const handleList = function (newArticle) {
    setList((list) => [...list, newArticle]);
  };

  const handleRemoveList = function (id) {
    setList((list) => list.filter((article) => article.id !== id));
  };

  const handleSelected = function (id) {
    const selectedArticle = list.find((el) => el.id === id);
    setItem(selectedArticle);
  };

  const handleUpdated = function (newArticle) {
    setList((list) =>
      list.map((article) => {
        if (article.id === newArticle.id) return newArticle;
        else return article;
      })
    );
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Shopping List</h1>
        </header>
        <Form
          //
          list={list}
          onAddList={handleList}
          onUpdateList={handleUpdated}
          item={item}
        />
        <CartList
          //
          list={list}
          onRemoveList={handleRemoveList}
          onSelected={handleSelected}
        />
      </div>
      <footer>
        <p>
          Project Made it By Alberto Zelaya <span>&copy; 2025</span>, don't claim as yours
        </p>
      </footer>
    </Fragment>
  );
}
