import React from "react";
import { Link } from "react-router-dom";
import DigitalGrey from "../assest/DigitalGrey.png"
import DigitalBlue from "../assest/DigitalBlue.png"
import DigitalGreen from "../assest/DigitalGreen.png"
import DigitalPink from "../assest/DigitalPink.png"
import DigitalGold from "../assest/DigitalGold.png"
//import { link } from "framer-motion/client";
//import { image } from "framer-motion/client";
//import { image } from "framer-motion/client";

const products = [
  {
    title: "Minimal Digital Planner - Grey Version ",
    price: "0.79",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
    image: DigitalGrey,
    link: "/prodotto/digitalplanner",
  },
  {
    title: "Minimal Digital Planner - Blue Version ",
    price: "0.89",
    priceId: "price_1RTSQ809aiIAsszvAIQNO1QH",
    image: DigitalBlue,
    link: "/prodotto/digitalplanner-blue",
  },
  {
    title: "Minimal Digital Planner - Green Version",
    price: "0.89",
    priceId: "price_1RUoPm09aiIAsszvLpGf04mB", // Sostituisci con il tuo priceId reale
    image: DigitalGreen,
    link: "/prodotto/digitalplanner-green",
  },
  {
    title: "Minimal Digital Planner - Pink Version",
    price: "0.89",
    priceId: "price_1RUoVd09aiIAsszvab22a6Sn", // Sostituisci con il tuo priceId reale
    image: DigitalPink,
    link: "/prodotto/digitalplanner-pink",
  },
  {
    title: "Minimal Digital Planner - Gold Version",
    price: "0.89",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D", // Sostituisci con il tuo priceId reale
    image: DigitalGold,
    link: "/prodotto/digitalplanner-gold",
  },
];

const Cart = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Scegli il tuo planner</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "300px", borderRadius: "8px" }}
                />
              )}
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>{product.title}</h3>
                <p style={{ margin: 0 }}>Prezzo: {product.price} €</p>
              </div>
            </div>
            {product.link ? (
              <Link
                to={product.link}
                style={{
                  padding: "0.6rem 1.2rem",
                  backgroundColor: "#00aaff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Visualizza
              </Link>
            ) : (
              <button
                disabled
                style={{
                  padding: "0.6rem 1.2rem",
                  backgroundColor: "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "not-allowed",
                }}
              >
                Non disponibile
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;


const responsiveStyles = `
@media (max-width: 768px) {
  /* Contenitore principale */
  div[style*="padding: 2rem"] {
    padding: 1rem !important;
  }

  /* Ogni card prodotto */
  div[style*="display: flex"][style*="justify-content: space-between"] {
    flex-direction: column !important;
    align-items: center !important;
    gap: 1rem !important;
    text-align: center;
  }

  /* Contenitore immagine + testo */
  div[style*="display: flex"][style*="align-items: center"] {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 0.5rem !important;
  }

  /* Immagini prodotti */
  img[style*="width: 300px"],
  img[style*="width: 400px"] {
    width: 100% !important;
    max-width: 90vw !important;
    height: auto !important;
  }

  /* Pulsanti */
  a[style*="padding: 0.6rem"],
  button[style*="padding: 0.6rem"] {
    width: 100% !important;
    font-size: 1rem !important;
    padding: 0.8rem !important;
    margin-top: 0.5rem !important;
  }
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = responsiveStyles;
document.head.appendChild(styleTag);
