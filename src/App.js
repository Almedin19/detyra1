import React, { useState } from "react";
import Products from "./components/Products";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage";
import Header from "./pages/Header";

function App() {
  const [cart, setCart] = useState([]);

  const testDataCart = (data) => {
    setCart(data);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Products sendData={testDataCart} />} />
        <Route path="/cardpage" element={<CardPage cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;
