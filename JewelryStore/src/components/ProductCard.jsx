// Imports
import { useProductQuery } from "../redux/api"
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

import {addProduct} from "../redux/cartSlice"
import { useDispatch } from "react-redux";

export default function ProductCard(props) {
  // Get the item id from the url parameters
  const { productId } = useParams();
  const { data, error, isLoading } = useProductQuery(productId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addProduct (product))
    console.log("Adding product to cart:", product);
    // Redirect to the cart page after adding the product
    navigate(`/carts`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product. Please try again later.</div>;
  }

  // Ensure that the product data exists before rendering
  const product = data;
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
    <h2>HOUSE OF HEERA</h2>
    <section className="product-wrapper">
      <div className="product-header">
        <div className="product-image-wrapper">
          <img className="singleProductImage" src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p> {/* Fixing the category display */}
          {props.token && <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>ADD TO CART</button>}
        </div>
      </div>
    
    </section>
    </>
  );
}