import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import paginate from "./pagination";

export const App2 = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/api/beach")
      .then((re) => setData(paginate(re.data)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};
