import React from "react";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import AboutUsPm from '../assest/AboutUsPm.png';
import SfondoBox1 from '../assest/SfondoBox1.png';
import FactoryBox from '../assest/FactoryBox.png';


const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Benvenuto su Planmanuh</h1>
      <p>Planner digitali per organizzare la tua vita con creatività.</p>
      <CallToAction />

<section className="box-section">
        <Link to="/shop" className="box">
        <div className="box-content">
        <img src={SfondoBox1} alt="SfondoBox1"/>
        <div className="box-text">
          <h3>Scopri i nostri Planner digitali!</h3>
          <p>Organizza la tua vita con stile! Scegli tra planner minimal, mensili e colorati pensati per aiutarti a pianificare al meglio ogni giorno. Perfetti per tablet e dispositivi digitali, pronti per il download immediato.</p>
        </div>
        </div>
        </Link>

        <Link to="/factory" className="box">
        <div className="box-content">
        <img src={FactoryBox} alt="FactoryBox"/>
        <div className="box-text">
          <h3>Crea qualcosa di unico per te!</h3>
          <p>Hai un’idea in mente? Che sia un planner speciale, un logo personalizzato o un’immagine creativa, raccontacelo! I nostri esperti realizzano prodotti digitali su misura per ogni occasione.</p>
        </div>
        </div>
        </Link>

          <Link to="/about" className="box">
        <div className="box-content">
        <img src={AboutUsPm} alt="AboutUsPm"/>
        <div className="box-text">
          <h3>Chi Siamo</h3>
          <p>Siamo un piccolo studio creativo con una grande passione per l’organizzazione e il design. Il nostro obiettivo è aiutarti a pianificare la tua vita quotidiana con stile, semplicità e ispirazione. Progettiamo planner digitali funzionali, esteticamente curati e facili da usare su tablet e dispositivi digitali. Ogni nostro prodotto è pensato per supportarti nel raggiungimento dei tuoi obiettivi personali e professionali, con attenzione ai dettagli e alle esigenze di chi ama restare organizzato… con creatività.</p>
        </div>
        </div>
        </Link>

      </section>
    </div>
  );
}


export default HomePage;