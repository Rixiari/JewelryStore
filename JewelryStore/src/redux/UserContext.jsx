import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const value = {
    isLoggedIn,
    toggleLogin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};