import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "./Form";
import Product from "./Context_API";
import Form2 from "./Form2";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Product />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
