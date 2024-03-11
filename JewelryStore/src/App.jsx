import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Account from "./components/Account";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [token, setToken] = useState(null);
  console.log(token);
  return (
    <div>
      <BrowserRouter>
      <NavBar token ={token}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Products />} />
        <Route path="/products/:productId" element={<ProductCard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
