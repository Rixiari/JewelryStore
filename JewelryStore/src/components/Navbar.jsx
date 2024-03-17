import { NavLink, useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  };

  if (props.token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allproducts">All Products</NavLink>
        <NavLink to="/carts">Cart</NavLink>
        <NavLink onClick={logoutUser}>Logout</NavLink>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allproducts">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/carts">Cart</NavLink>
    </nav>
  );
}

export default NavBar;
