import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [message, setMessage] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setMessage("Checkout Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty.</p>

        <Link to="/plants" className="get-started-button">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.map((item) => {
        const itemTotal = item.price * item.quantity;

        return (
          <article className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h2>{item.name}</h2>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Item Total: ${itemTotal.toFixed(2)}</p>

              <div className="quantity-controls">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                >
                  −
                </button>

                <span>Quantity: {item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </article>
        );
      })}

      <section className="cart-summary">
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

        <button onClick={handleCheckout}>Checkout</button>

        {message && <p>{message}</p>}

        <br />
        <br />

        <Link to="/plants" className="get-started-button">
          Continue Shopping
        </Link>
      </section>
    </main>
  );
}

export default CartItem;
