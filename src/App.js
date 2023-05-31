import React, { useState } from "react";
import "./App.css";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2, quantity: 1 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ]);

  const incQ = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: parseInt(item.quantity) + 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const negQ = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: parseInt(item.quantity) - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = (item) => {
    item.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    setItems([...items, item]);
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items items={items} inc={incQ} dec={negQ} del={deleteItem} />
        <AddItem add={addItem} />
        <Total items={items} />
      </div>
    </div>
  );
};

export default App;
