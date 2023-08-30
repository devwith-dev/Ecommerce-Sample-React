import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Everythings.css";
export const Everything = () => {
  const [myData, setMyData] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((myData) => setMyData(myData));
  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="product-container">
        {myData.map((product, id) => (
          <Link to={`products/${id+1}`}>
            <div className="product">
              <img src={product.image} />
              <h2>{product.title}</h2>
              <span>{product.category}</span>
              <p className="price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
