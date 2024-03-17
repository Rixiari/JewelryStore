import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductListQuery } from "../redux/api";
import { useUser } from "../redux/UserContext"; // Import useUser hook from UserContext
import FilterSort from "./FilterSortBar";

function Products(props) {
  const navigate = useNavigate();
  const { data, error, isLoading } = useProductListQuery();
  const { isLoggedIn } = useUser(); // Get the isLoggedIn status from the user context
  const [filteredData, setFilteredData] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data) {
      applyFiltersAndSort();
    }
  }, [data, categoryFilter, priceRangeFilter, sortOption]);

  const applyFiltersAndSort = () => {
    console.log(data);
    let filteredProducts = [...data]; // Make a copy of the data array

    // Filter the products based on the selected category
    console.log(filteredProducts);
    if (categoryFilter && categoryFilter !=="") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    console.log(categoryFilter);
    console.log(filteredProducts);

    // Filter the products based on the selected price range
    if (priceRangeFilter && priceRangeFilter !== "" ) {
      const [minPrice, maxPrice] = priceRangeFilter.split("-");
      filteredProducts = filteredProducts.filter((product) => {
        const price = parseFloat(product.price);
        console.log(minPrice === "", price >= parseFloat(minPrice),(minPrice === "" || price >= parseFloat(minPrice)) )
        console.log(maxPrice === "",price <= parseFloat(maxPrice), (maxPrice === "" || price <= parseFloat(maxPrice)))
        return (
          (minPrice === "" || price >= parseFloat(minPrice)) &&
          (maxPrice === "" || price <= parseFloat(maxPrice))
        );
      });
    }
console.log(priceRangeFilter);

    // Sort the products based on the selected option
    if (sortOption === "price_asc") {
      filteredProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortOption === "price_desc") {
      filteredProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    // Update the filteredData state with the filtered and sorted result
    setFilteredData(filteredProducts);
  };


  const handleAddToCart = (product) => {
    // Add product to the cart
    setCart([...cart, product]);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  return (
    <section>
      <FilterSort
        categories={["Electronics", "Men's clothing","Women's clothing", "Jewelery"]}
        onFilter={(filters) => {
          setCategoryFilter(filters.category);
          setPriceRangeFilter(filters.priceRange);
        }}
        // sortBy={["price_asc", "price_desc"]}
        onSort={(sort) => {
          setSortOption(sort)
        }}
      />
      <div className="productList">
        {(filteredData || data)?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="product-details">
              <h2>Title: {product.title}</h2>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
              {/* Render "Add to Cart" button only for logged-in users */}
              {isLoggedIn && (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
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
