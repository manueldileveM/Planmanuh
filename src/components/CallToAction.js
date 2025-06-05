import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta">
      <h2>Organizza la tua vita con stile</h2>
      <p>Planner digitali scaricabili subito, ovunque tu sia.</p>
      <Link to="/shop" className="cta-button">
              Scopri i prodotti
              </Link>
    </section>
  );
};

export default CallToAction;
