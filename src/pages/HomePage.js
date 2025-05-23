import React from "react";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import manga2 from '../assest/manga2.jpg';


const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Benvenuto su Planmanuh</h1>
      <p>Planner digitali per organizzare la tua vita con creatività.</p>
      <CallToAction />

<section className="box-section">
        <Link to="/shop" className="box">
        <div className="box-content">
        <img src={manga2} alt="manga"/>
        <div className="box-text">
          <h3>Scopri i nostri Planner digitali!</h3>
          <p>Organizza la tua vita con stile! Scegli tra planner minimal, mensili e colorati pensati per aiutarti a pianificare al meglio ogni giorno. Perfetti per tablet e dispositivi digitali, pronti per il download immediato.</p>
        </div>
        </div>
        </Link>


        <div className="box">Planner Giornaliero</div>
        <div className="box">Planner Obiettivi</div>
      </section>
    </div>
  );
}


export default HomePage;