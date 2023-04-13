import React, { useState, useEffect } from "react";
import { useSubmit } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, settoken] = useState(initialToken);
  const submit = useSubmit();

  const userIsLoggedIn = !!token; 
  useEffect(() => {
    if(!token){
      return;
    }
    setTimeout(() => {
      submit(null,{action :'/logout', method:'post'});
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  }, [token, submit]);


   const loginHandler = (token) => {
    settoken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    settoken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;