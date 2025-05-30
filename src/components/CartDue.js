import React from "react";
import { Link } from "react-router-dom";
import VacationPlan1 from "../assest/VacationPlan1.png";
import VacationPlan2 from "../assest/VacationPlan2.png";
import BudgetPlan from "../assest/BudgetPlan.png";
//import { link } from "framer-motion/client";

const products = [
  {
    title: "Pianificatore di vacanze - Minimo",
    price: "2.45",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
    image: VacationPlan1,
    link: "/prodotto/vacanze-minimo",
  },
  {
    title: "Pianificatore di vacanze - Minimo",
    price: "2.25",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
    image: VacationPlan2,
    link: "/prodotto/vacanze-minimal",
  },
  {
    title: "Budget Planner - Minimo",
    price: "3.15",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
    image: BudgetPlan,
    link: "/prodotto/vacanze-budget",
  },
  {
    title: "Planner Obiettivi",
    price: "14.99",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
  },
  {
    title: "Planner Obiettivi",
    price: "14.99",
    priceId: "price_1RP7fZ09aiIAsszvC0FzVt0D",
  },
];

const CartDue = () => {
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

export default CartDue;
