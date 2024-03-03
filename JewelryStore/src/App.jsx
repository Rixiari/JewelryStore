import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";

import Account from "./components/Account";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account" element={<Account />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
