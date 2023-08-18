import React, { useState } from "react";
import "./CardPage.css";
import { useEffect } from "react";

function CardPage(props) {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isInvoiceShown, setIsInvoiceShown] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleDelete = (productId) => {
    const updatedCart = cart.filter((produkt) => produkt.id !== productId);
    updateCartAndLocalStorage(updatedCart);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map((produkt) =>
      produkt.id === productId
        ? { ...produkt, qty: Math.max(produkt.qty + change, 1) }
        : produkt
    );

    updateCartAndLocalStorage(updatedCart);
  };

  const updateCartAndLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculatePrice = (produkt) => {
    const priceWithoutVAT = produkt.cmimi * produkt.qty;
    const vatAmount = (priceWithoutVAT * produkt.vat) / 100;
    const totalPrice = priceWithoutVAT + vatAmount;
    return totalPrice.toFixed(2);
  };

  //   ///////////////////////////
  const calculateSubtotal = () => {
    const subtotal = cart.reduce(
      (accumulator, produkt) =>
        produkt.cmimi * produkt.qty <= 499.99
          ? accumulator + produkt.cmimi * produkt.qty
          : accumulator,
      0
    );
    return subtotal.toFixed(2);
  };

  const calculateVAT = () => {
    const totalVAT = cart.reduce(
      (accumulator, produkt) =>
        produkt.cmimi * produkt.qty <= 499.99
          ? accumulator + produkt.cmimi * produkt.qty * (produkt.vat / 100)
          : accumulator,
      0
    );
    return totalVAT.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce(
      (accumulator, produkt) =>
        produkt.cmimi * produkt.qty <= 499.99
          ? accumulator + produkt.cmimi * produkt.qty * (1 + produkt.vat / 100)
          : accumulator,
      0
    );
    return totalPrice.toFixed(2);
  };

  const renderInvoice = () => {
    return (
      <div className="invoice">
        <h3>Special Invoice</h3>
        {cart.map(
          (produkt) =>
            (produkt.qty > 50 || produkt.cmimi * produkt.qty > 500) && (
              <div className="invoice-prod" key={produkt.id}>
                <p>Name: {produkt.emri}</p>
                <p>Price: {produkt.cmimi}$</p>
                <p>Quantity: {produkt.qty}</p>
                <p>Total Price: {calculatePrice(produkt)}$</p>
              </div>
            )
        )}
      </div>
    );
  };

  const handlePayment = () => {
    alert("Payment was completed successfully");
    setPaymentSuccess(true);
    setIsInvoiceShown(true);
    updateCartAndLocalStorage([]);
  };

  return (
    <div className="card-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((produkt) => (
            <div className="card-prod" key={produkt.id}>
              <p>Name: {produkt.emri}</p>
              <p>Price: {produkt.cmimi}$</p>
              <p>VAT: {produkt.vat}%</p>
              <p>
                Quantity:
                <button onClick={() => handleQuantityChange(produkt.id, 1)}>
                  +
                </button>
                {produkt.qty}
                <button onClick={() => handleQuantityChange(produkt.id, -1)}>
                  -
                </button>
              </p>
              <p>Total Price: {calculatePrice(produkt)}$</p>
              <p>
                <button onClick={() => handleDelete(produkt.id)}>Delete</button>
              </p>
            </div>
          ))}
          <div className="checkout-summary">
            {isCheckout ? (
              <>
                <p>Subtotal : {calculateSubtotal()}$</p>
                <p>VAT: {calculateVAT()}$</p>
                <p>Total Price: {calculateTotalPrice()}$</p>
                {renderInvoice()}
                {/* <button onClick={createInvoice}>Proceed to Checkout</button> */}
                <button onClick={handlePayment}> Payment</button>
              </>
            ) : (
              <>
                <button onClick={() => setIsCheckout(true)}>Checkout</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPage;
