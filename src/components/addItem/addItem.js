import React, { useState } from "react";

const AddItem = ({ add }) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "product") {
      setProduct(value);
    } else if (id === "price") {
      setPrice(value);
    } else if (id === "quantity") {
      setQuantity(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add({ product, price, quantity });
    setProduct("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product}
          placeholder="Enter Product"
          id="product"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          value={price}
          placeholder="Enter Price"
          id="price"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          value={quantity}
          placeholder="Enter Quantity"
          id="quantity"
          onChange={handleChange}
          min={1}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
