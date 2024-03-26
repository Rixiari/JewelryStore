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
        <NavLink to="/">home</NavLink>
        <NavLink to="/allproducts">products</NavLink>
        <NavLink to="/carts">Cart</NavLink>
        <NavLink onClick={logoutUser}>Logout</NavLink>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/allproducts">products</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/carts">cart</NavLink>
    </nav>
  );
}

export default NavBar;
