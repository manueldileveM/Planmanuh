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
          <h3>esempio di come dovrebbe uscire</h3>
          <p>da completare i due box sotto, scrivere esattamente quello che sta scritto in questo box, senza cambiare i vari nomi dei div ecc. Tanto in app.css stanno già i codici scritti, l'unica cosa da fare è importare altre immagini</p>
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