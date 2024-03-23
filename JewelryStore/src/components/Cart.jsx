import { useSelector, useDispatch } from "react-redux";
import { selectCart, deleteProduct } from "../redux/cartSlice";
import { useState } from "react";

export function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
const [message, setMessage] = useState(null);

  // Calculate total price and quantity
  const totalPrice = cart.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
  console.log(cart);

  const handleCheckout = () => {
    setMessage("Checkout Successful");
    // Dispatch an action to clear the cart (delete all products)
    cart.forEach(transaction => {
      dispatch(deleteProduct({ productId: transaction.productId }));
    });
    // Log checkout
    console.log("Checkout completed");
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>{message?message:"Your cart is empty"}</p>
      ) : (
        <>
          <ul>
            {cart.map((transaction, index) => (
              <li key={index}>
                <div className="cart-item">
                  <div className="cart-item-details">
                    <h3>{transaction.title}</h3>
                    <p>Category: {transaction.category}</p>
                    <p>Price: {transaction.price}</p>
                    <p>Quantity: {transaction.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;