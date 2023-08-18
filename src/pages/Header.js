import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Header.css";

function Header() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Shooping</h2>
      </Link>
      <Link to="/cardpage">Cart ({cart.length})</Link>
    </div>
  );
}

export default Header;
