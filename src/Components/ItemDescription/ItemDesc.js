import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDesc.css"

export const ItemDesc = () => {
  const { id } = useParams();

  const [Data, setData] = useState([]);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((Data) => setData(Data));

  return (
    <>
      <div className="product-desc">
        <img src={Data.image} />
        <div className="desc">
          <span>{Data.category}</span>
          <h2>{Data.title}</h2>
          <span className="item-price">${Data.price}</span>
          <p>{Data.description}</p>
        </div>
      </div>
    </>
  );
};
