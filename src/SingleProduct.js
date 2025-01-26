import React from "react";

const SingleProduct = ({ title, price, images }) => {
  return (
    <div class="card">
      <img src={images} alt="Avatar" style={{ width: "100%" }} />
      <div class="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
