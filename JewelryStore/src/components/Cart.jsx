import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHistory, deleteProduct } from "../redux/cartSlice";

export function Cart() {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

  // Calculate total price and quantity
  const totalPrice = history.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
  const totalQuantity = history.length;

  const handleCheckout = () => {
    // Dispatch an action to clear the cart (delete all products)
    history.forEach(transaction => {
      dispatch(deleteProduct({ productId: transaction.productId }));
    });
    // Log checkout
    console.log("Checkout completed");
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {history.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {history.map((transaction, index) => (
              <li key={index}>
                <div className="cart-item">
                  <div className="cart-item-details">
                    <h3>{transaction.title}</h3>
                    <p>Category: {transaction.category}</p>
                    <p>Price: {transaction.price}</p>
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