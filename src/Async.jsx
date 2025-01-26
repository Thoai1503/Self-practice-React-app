import axios from "axios";
import React, { useState } from "react";

const Async = () => {
  const [products, setProduct] = useState([]);

  function showProduct() {
    if (products) {
      products.map((item) => {
        <li>{item.title}</li>;
      });
    }
    return <li style={{ color: "black" }}>No result</li>;
  }

  function fetchData() {
    return new Promise(() => {
      axios.get("https://dummyjson.com/products");
    });
  }

  return (
    <div>
      <ul>{showProduct()}</ul>
    </div>
  );
};

export default Async;
