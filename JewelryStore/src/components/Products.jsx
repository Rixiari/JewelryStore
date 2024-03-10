//api
import { useNavigate } from "react-router";
import { useProductListQuery } from "../redux/api";
//components
import ProductCard from "./ProductCard";

function Products(props) {
    const navigate = useNavigate();
    const {data,error, isLoading} = useProductListQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  return (
    <section>
      <div className="productList">
        {/* Map through the data array and generate a div for each book */}
        {data?.map((product) => (
          <button
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {/* Use the product's ID as the key for this div */}
            <div className="product-card">
              {/* Display the product's image, with the book's title as alt text */}
              <div className="product-image-container">
                <img className="product-image" src={product.image} />
              </div>

              <div className="product-details">
                <h2> Title: {product.title} </h2>
                <p> price: {product.price} </p>
                <p> category: {product.price} </p>
                <p> description: {product.category} </p>
              </div>
            </div>
          </button>
        ))};
      </div>
    </section>
  );
}

export default Products;
