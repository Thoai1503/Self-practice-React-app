import axios from "axios";
import React, { useEffect, useState } from "react";

const Async = () => {
  const [products, setProduct] = useState([]);
  const [data, setData] = useState([]);

  function showProduct() {
    if (products) {
      products.map((item) => {
        <li>{item.title}</li>;
      });
    }
    return <li style={{ color: "black" }}>No result</li>;
  }

  function fetchData() {
    return new Promise((resovle, reject) => {
      axios.get("https://dummyjson.com/products").then((res) => {
        setProduct(res.data.products);
      });
      const error = true;

      if (!error) {
        resovle();
      } else {
        reject("Error: Something went wrong");
      }
    });
  }

  useEffect(() => {
    fetchData()
      .then(setData(products))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map((item) => {
            <li key={item.id} style={{ color: "black" }}>
              {item.title}
            </li>;
          })
        ) : (
          <li style={{ color: "black" }}>No result</li>
        )}
      </ul>
    </div>
  );
};

export default Async;
