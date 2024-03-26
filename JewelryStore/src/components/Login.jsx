import { useState } from "react";
import { useNavigate } from "react-router-dom";
//api
import { useLoginMutation } from "../redux/api";
//css
import "../App.css";
import homeimg1 from '../assets/homeimg/1.jpg'



function Login(props) {


  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setError] = useState(null);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const loginEvent = async (event) => {
    event.preventDefault();
    const { data, error } = await login(userInfo);

    if (error) {
      // error.data
      setError(error.data);
    } else {
      //data.token
      props.setToken(data.token);
      //navigate to home after login
      navigate("/allproducts");
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
    <h2>HOUSE OF HEERA</h2>
    <div className="login-container">
      {/*error message */}
      {errorMsg ? <p className="error-message">errorMsg</p> : <span />}
      <form className="login-form" onSubmit={loginEvent}>
        <label htmlFor="username"> username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          />


        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={userInfo.password}
          onChange={onUserInput}
        />
        <button>LOGIN</button>
      </form>
    </div>
    </>
  );
}

export default Login;
