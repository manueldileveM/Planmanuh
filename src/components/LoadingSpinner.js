import React from "react";
import { useSearchParams } from "react-router-dom";

const LoadingSpinner = () => {
  const [params] = useSearchParams();
  const priceId = params.get("priceId");

  const downloadLinks = {
    "price_1RP7fZ09aiIAsszvC0FzVt0D": "/files/DigitalPlannerGrey.pdf",
    //"price_1RTQLs09aiIAsszvUPZYN7Q6": "/files/DigitalPlannerBlue.pdf",  --> PRICEID !!!REALE!!!, IN LIVE
    "price_1RTSQ809aiIAsszvAIQNO1QH": "/files/DigitalPlannerBlue.pdf",
    //"price_1RP7fZ09aiIAsszvC0FzVt0D-green": "/files/DigitalPlannerGreen.pdf",
  };

  const downloadUrl = downloadLinks[priceId];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>🎉 Grazie per il tuo acquisto!</h2>
      <p>Il tuo planner digitale è pronto per il download.</p>

      {downloadUrl ? (
        <a href={downloadUrl} download>
          <button
            style={{
              marginTop: "1.5rem",
              padding: "1rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#00aaff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            📥 Scarica il tuo planner
          </button>
        </a>
      ) : (
        <p style={{ color: "red", marginTop: "2rem" }}>
          Non troviamo il tuo file. Contattaci per riceverlo.
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
