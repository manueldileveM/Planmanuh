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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
