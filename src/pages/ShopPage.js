import React from "react";
import ProductCard from "../components/ProductCard";
import DigitalGrey from "../assest/DigitalGrey.png"; // scommenta se hai l’immagine

const ShopPage = () => {
  const products = [
    {
      title: "Minimal Digital Planner - Grey version",
      price: "0.79",
      priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D", // sostituisci con il tuo ID reale
      image: DigitalGrey,
    },
    {
      title: "Planner Mensile",
      price: "12.99",
      priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
      // image: productImg,
    },
    {
      title: "Planner Mensile",
      price: "12.99",
      priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
      // image: productImg,
    },
  ];

  return (
    <div className="shop-page" style={{ padding: "2rem" }}>
      <h2>Scopri i nostri planner digitali</h2>

      <div className="product-grid" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            priceId={product.priceId}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
