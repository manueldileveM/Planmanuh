import React from "react";
import MockupDPlannerPink from "../fotoprodotti/MockupDPlannerPink.png";
import MockupDPlannerPink1 from "../fotoprodotti/MockupDPlannerPink1.png";
import MockupDPlannerPink2 from "../fotoprodotti/MockupDPlannerPink2.png";

const DigPlannerPink = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: "price_1RUoVd09aiIAsszvab22a6Sn",
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Errore: URL di checkout mancante");
      }
    } catch (error) {
      console.error("Errore durante il checkout:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Digital Planner - Pink Version</h2>
      <img
        src={MockupDPlannerPink}
        alt="Planner Vacanze"
        style={{ width: "400px", marginBottom: "1rem" ,borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"   }}
      />
      <img
        src={MockupDPlannerPink1}
        alt="Planner Vacanze"
        style={{ width: "400px", marginBottom: "1rem" }}
      />
      <img
        src={MockupDPlannerPink2}
        alt="Planner Vacanze"
        style={{ width: "400px", marginBottom: "1rem" , borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
      />
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Prezzo: 0.89 €</p>
      <button
        onClick={handleCheckout}
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#00aaff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Procedi al pagamento
      </button>
    </div>
  );
};

export default DigPlannerPink;
