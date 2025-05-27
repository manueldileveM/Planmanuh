import React from "react";
import DigitalGrey from "../assest/DigitalGrey.png"
import DigitalBlue from "../assest/DigitalBlue.png"
import DigitalGreen from "../assest/DigitalGreen.png"
import DigitalPink from "../assest/DigitalPink.png"
import DigitalGold from "../assest/DigitalGold.png"
//import { image } from "framer-motion/client";
//import { image } from "framer-motion/client";

const products = [
  {
    title: "Minimal Digital Planner - Grey Version ",
    price: "0.79",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
    image: DigitalGrey,
  },
  {
    title: "Minimal Digital Planner - Blue Version ",
    price: "0.89",
    priceId: "price_1RTSQ809aiIAsszvAIQNO1QH",
    image: DigitalBlue,
  },
  {
    title: "Minimal Digital Planner - Green Version",
    price: "0.89",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D", // Sostituisci con il tuo priceId reale
    image: DigitalGreen,
  },
  {
    title: "Minimal Digital Planner - Pink Version",
    price: "0.89",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D", // Sostituisci con il tuo priceId reale
    image: DigitalPink,
  },
  {
    title: "Minimal Digital Planner - Gold Version",
    price: "0.89",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D", // Sostituisci con il tuo priceId reale
    image: DigitalGold,
  },
];

const Cart = () => {
  const handleCheckout = async (priceId) => {
    try {
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redireziona a Stripe
      } else {
        console.error("Errore: URL di checkout mancante");
      }
    } catch (error) {
      console.error("Errore durante il checkout:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Scegli il tuo planner</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
        {products.map((product) => (
        <div
  key={product.priceId}
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
    <img src={product.image} alt={product.title} style={{ width: "300px", borderRadius: "8px" }} />
    <div>
      <h3 style={{ marginBottom: "0.5rem" }}>{product.title}</h3>
      <p style={{ margin: 0 }}>Prezzo: {product.price} €</p>
    </div>
  </div>
  <button
    onClick={() => handleCheckout(product.priceId)}
    style={{
      padding: "0.6rem 1.2rem",
      backgroundColor: "#00aaff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Procedi al pagamento
  </button>
</div>

        ))}
      </div>
    </div>
  );
};

export default Cart;
