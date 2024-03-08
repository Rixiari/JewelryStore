import { useState } from "react";
import { useNavigate } from "react-router-dom";
//api
import { useLoginMutation } from "../redux/api";



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
      navigate("/");
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      {/*error message */}
      {errorMsg ? <p>errorMsg</p> : <span />}
      <form onSubmit={loginEvent}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={userInfo.password}
          onChange={onUserInput}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
