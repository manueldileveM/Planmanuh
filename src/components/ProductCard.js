import React from "react";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price} €</p>
      <button>Acquista</button>
    </div>
  );
};

export default ProductCard;
