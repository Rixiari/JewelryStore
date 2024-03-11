// 2 parts to the cart
// 1/2. cart page = component
// 2/2. cart state, global state, all components would have access to. Reference unit 3, 27B

import React from "react";
import { useCartQuery } from "../redux/api";

function Cart() {
  const { data: cart, error, isLoading } = useCartQuery();

  if (isLoading) {
    return <p>Loading cart...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Calculate total price and quantity
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);
  const totalQuantity = cart.length;

  const handleCheckout = () => {
    // Handle checkout logic
    console.log("Checkout clicked");
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <div className="cart-item">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{product.title}</h3>
                    <p>Price: {product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;