import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./App.css";
import Cart from "./components/Cart";
import CartDue from "./components/CartDue";
import CartTre from "./components/CartTre";
import LoadingSpinner from "./components/LoadingSpinner";
import PlanVacation from "./prodotti/PlanVacation";
import PlanVacationDue from "./prodotti/PlanVacationDue";
import PlanBudget from "./prodotti/PlanBudget";
import DigPlanner from "./prodotti/DigPlanner";
import DigPlannerBlue from "./prodotti/DigPlannerBlue";
import DigPlannerGreen from "./prodotti/DigPlannerGreen";
import DigPlannerPink from "./prodotti/DigPlannerPink";

const App = () => {
  return (
    <Router basename="/Planmanuh">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart-due" element={<CartDue />} />
          <Route path="/cart-tre" element={<CartTre />} />
          <Route path="/success" element={<LoadingSpinner />}/>
          <Route path="/prodotto/vacanze-minimo" element={<PlanVacation />} />
          <Route path="/prodotto/vacanze-minimal" element={<PlanVacationDue />} />
          <Route path="/prodotto/vacanze-budget" element={<PlanBudget />} />
          <Route path="/prodotto/digitalplanner" element={<DigPlanner />} />
          <Route path="/prodotto/digitalplanner-blue" element={<DigPlannerBlue />} />
          <Route path="/prodotto/digitalplanner-green" element={<DigPlannerGreen />} />
          <Route path="/prodotto/digitalplanner-pink" element={<DigPlannerPink />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
