// Imports
import { useProductQuery } from "../redux/api"
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

export default function ProductCard(props) {
  // Get the item id from the url parameters
  const { productId } = useParams();
  const { data, error, isLoading } = useProductQuery(productId);
  const navigate = useNavigate();

  function handleAddToCart(product) {
    // Logic for adding the product to the cart
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
    <section className="product-wrapper">
      <div className="product-header">
        <div className="product-image-wrapper">
          <img className="singleProduct" src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2>Title: {product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p> {/* Fixing the category display */}
        </div>
      </div>
    {props.token && <button onClick={() => handleAddToCart(product)}>Add to Cart</button>}
    </section>
  );
}