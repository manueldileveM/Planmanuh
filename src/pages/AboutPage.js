
import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Chi siamo</h1>

      <p className="about-text">
        Ciao! Siamo <strong>Planmanuh</strong>, un piccolo progetto nato con un grande obiettivo:
        aiutare donne freelance e content creator a organizzarsi con stile, chiarezza e creatività.
      </p>

      <p className="about-text">
        Tutto è iniziato da un’esigenza personale: trovare uno strumento digitale che fosse
        davvero utile, semplice da usare e anche bello da vedere. Dopo ore spese a cercare il planner perfetto,
        abbiamo deciso di crearlo noi — su misura per chi ama pianificare ma non vuole complicarsi la vita.
      </p>

      <p className="about-text">
        Ogni prodotto che trovi su Planmanuh è pensato con cura: funzionalità, estetica minimal e massima
        personalizzazione. Usiamo Notion, Canva e un pizzico di ispirazione quotidiana per trasformare idee in strumenti digitali concreti.
      </p>

      <p className="about-text">
        Il nostro pubblico ideale? Donne ambiziose, creative, multitasking — quelle che sognano in grande e cercano soluzioni intelligenti
        per gestire il tempo, il lavoro e la vita personale.
      </p>

      <p className="about-text">
        Siamo felici di avere una community in crescita che condivide i nostri valori: semplicità, bellezza e autenticità.
        Se vuoi seguirci dietro le quinte, ci trovi su Instagram <a href="https://instagram.com/planmanuh" target="_blank" rel="noopener noreferrer">@planmanuh</a>.
        E se vuoi scriverci, ci farà super piacere: <a href="mailto:planmanuh@gmail.com.com">planmanuh@gmail.com</a>.
      </p>

      <div className="about-cta">
        <Link to="/shop" className="about-button">
        Scopri i nostri prodotti
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
