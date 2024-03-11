import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductListQuery } from "../redux/api";
import { useUser } from "../redux/UserContext"; // Import useUser hook from UserContext

function Products(props) {
  const navigate = useNavigate();
  const { data, error, isLoading } = useProductListQuery();
  const { isLoggedIn } = useUser(); // Get the isLoggedIn status from the user context

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  const handleAddToCart = (product) => {
    // Logic to handle adding product to cart
    console.log("Adding product to cart:", product);
  };

  return (
    <section>
      <div className="productList">
        {data?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img className="product-image" src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h2>Title: {product.title}</h2>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
              {/* Render "Add to Cart" button only for logged-in users */}
              {isLoggedIn && (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
            </div>
            <button onClick={() => navigate(`/products/${product.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;