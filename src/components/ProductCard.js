import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, price, priceId , index }) => {
  let linkPath = "/cart";
  if (index === 1) linkPath = "/cart-due";
  if (index === 2) linkPath = "/cart-tre";

  return (
    <div
      className="product-card"
      style={{
        width: "280px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "1rem",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* immagine opzionale */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
        />
      )}

      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "1rem" }}>{price} €</p>

      {/* Link alla pagina Cart passando i dati del prodotto */}

       <Link
        to={linkPath}
        state={{ title, price, priceId, image }}
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#00aaff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Acquista
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
