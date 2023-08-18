import React, { useEffect, useState } from "react";
import produkte from "../Producte";
import "./Products.css";

function Products(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleCardClick = (selectedProdukt) => {
    console.log(selectedProdukt);

    const existingProduct = cart.find((item) => item.id === selectedProdukt.id);

    if (existingProduct) {
      alert("Product is already in the Cart");
    } else {
      const updatedCart = [...cart, { ...selectedProdukt, qty: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    props.sendData(cart);
  };

  return (
    <div className="prod-div">
      {produkte.map((produkt) => (
        <div className="b-prod" key={produkt.id}>
          <p>Name: {produkt.emri}</p>
          <p>Price: {produkt.cmimi}</p>
          <p>VAT: {produkt.vat}%</p>
          <p>Quantity: {produkt.qty}</p>
          <button onClick={() => handleCardClick(produkt)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
