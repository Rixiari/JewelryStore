import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Account from "./components/Account";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login token={token} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
