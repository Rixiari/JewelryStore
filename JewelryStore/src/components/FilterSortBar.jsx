// Reference 29 SearchBar
import React, { useState } from "react";

function FilterSort({ categories, onFilter, onSort }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const handleFilter = () => {
    onFilter({
      category: selectedCategory,
      priceRange: selectedPriceRange
    });
  };

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    onSort(sortBy);
  };

  return (
    <div className="filter-sort-bar">
            <select 
      className="filter-sort-select"
      onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
      <select
       className="filter-sort-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
      className="filter-sort-select"
        value={selectedPriceRange}
        onChange={(e) => setSelectedPriceRange(e.target.value)}
      >
        <option value="">Price Range</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-up">$100 & Up</option>
      </select>
      <button 
      className="filter-sort-button"
      onClick={handleFilter}>Filter</button>


    </div>
  );
}

export default FilterSort;