import React, { useState } from 'react';

const Factory = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    email: '',
    date: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // QUI: invia l'email oppure salva nel tuo sistema
    alert("Grazie! Ti contatteremo presto.");
    console.log(formData);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
  <h2>Richiedi una creazione personalizzata</h2>

  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

    <label>
      Cosa vuoi che ti crei?
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">-- Seleziona --</option>
        <option value="logo">Logo personalizzato</option>
        <option value="immagine">Immagine per Instagram</option>
        <option value="viaggio">Planner di Viaggio</option>
        <option value="budget">Planner di Budget</option>
        <option value="compleanno">Planner di Compleanno</option>
        <option value="matrimonio">Planner di Matrimonio</option>
        <option value="altro">Altro</option>
      </select>
    </label>

    <label>
      Descrivi la tua idea
      <textarea name="description" value={formData.description} onChange={handleChange} required />
    </label>

    <label>
      Data desiderata
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
    </label>

    <label>
      La tua email
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    </label>

    <button type="submit">Invia richiesta</button>
  </form>

  <style>
    {`
      input,
      select,
      textarea {
        width: 100%;
        padding: 0.8rem;
        border: 2px solid #00aaff;
        border-radius: 10px;
        background-color: #f9f9f9;
        font-size: 1rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      input:focus,
      select:focus,
      textarea:focus {
        border-color: #0077cc;
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 170, 255, 0.2);
      }

      button {
        background-color: #00aaff;
        color: white;
        border: none;
        padding: 0.9rem;
        font-size: 1rem;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #008ecc;
      }
    `}
  </style>
</div>


  );
};


export default Factory;
