import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import "./App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Bring nature home with beautiful houseplants for every space.
        </p>

        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
