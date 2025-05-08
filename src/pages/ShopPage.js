import React from "react";
import ProductCard from "../components/ProductCard";
//import productImg from "../assets/planner-demo.jpg"; // Assicurati di avere un'immagine

const ShopPage = () => {
  const products = [
    {
      title: "Planner Settimanale",
      price: "9.99",
      //image: productImg,
    },
    {
      title: "Planner Mensile",
      price: "12.99",
      //image: productImg,
    },
  ];

  return (
    <div className="shop-page">
      <h2>Scopri i nostri planner digitali</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
