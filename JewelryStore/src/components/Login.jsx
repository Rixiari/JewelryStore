function Login (props){
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
      });
    
    const [errorMsg, setError] = useState(null);

    const loginEvent = async (event) => {
        event.preventDefault();
        const {data, error} = await loginEvent(userInfo);

        of (error) {

        } else {

        }
    };

    const onUserInput = (e) => {
        if (errorMsg){
            setError(null);
        }
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      };

    return(
        <div>
            <h2>Login</h2>
            {/*error message */}
{errorMsg ? <p>errorMsg</p>: <span />}
<form onSubmit ={loginEvent}>
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