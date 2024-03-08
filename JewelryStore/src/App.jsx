import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Account from "./components/Account";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";

function App() {
  const [token, setToken] = useState(null);
  
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
