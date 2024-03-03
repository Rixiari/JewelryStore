import { useState } from "react";
//api
import { useRegisterMutation } from "../redux/api";

/*
 body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
*/

function Register() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: "",
    name: { firstname: "", lastname: "" },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: { lat: "", long: "" },
    },
    phone: "",
  });

  const [register] = useRegisterMutation();

  const submitForm = (event) => {
    event.preventDefault();
    register(userInfo);
  };

  const onUserInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onNameChange = (e) => {
    setUserInfo({
      ...userInfo,
      name: { ...userInfo.name, [e.target.name]: e.target.value },
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          First name
          <input
            type="text"
            placeholder="First name"
            name="firstname"
            value={userInfo.name.firstname}
            onChange={onNameChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            placeholder="Last name"
            name="lastname"
            value={userInfo.name.lastname}
            onChange={onNameChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>

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

        <label>
          City
          <input
            type="text"
            placeholder="City"
            name="city"
            value={userInfo.city}
            onChange={onUserInput}
          />
        </label>
        <label>
          Street
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={userInfo.street}
            onChange={onUserInput}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            placeholder="Number"
            name="number"
            value={userInfo.number}
            onChange={onUserInput}
          />
        </label>
        <label>
          Zipcode
          <input
            type="text"
            placeholder="Zipcode"
            name="zipcode"
            value={userInfo.zipcode}
            onChange={onUserInput}
          />
        </label>
        <label>
          Geolocation
          <input
            type="text"
            placeholder="geolocation"
            name="geolocation"
            value={userInfo.geolocation}
            onChange={onUserInput}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            placeholder="phone"
            name="phone"
            value={userInfo.phone}
            onChange={onUserInput}
          />
        </label>

        <button>Join House of Heera</button>
      </form>
    </div>
  );
}

export default Register;
