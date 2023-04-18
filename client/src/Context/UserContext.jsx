import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setcurrentUser] = useState({});


  const signIn = async (payload) => {
    try {
      const resp = await api.loginUser(payload);
      if (resp.ok) {
        localStorage.setItem("token", resp.data.accesstoken);
        localStorage.setItem("user", JSON.stringify(resp.data.newUserData));
        setcurrentUser({ ...resp.data.newUserData });
        setIsLoggedIn(true);
        return "success";
      } else {
        setIsLoggedIn(false);
        return resp.data;
      }
    } catch (err) {}
  };

  const fetchUser = async ()=>{
    try {
      const resp = await api.fetchUser()
      if(resp){
        setcurrentUser({...resp.data})
        return {...resp.data}
      }
    } catch (error) {
      console.log(error)
    }
  }
  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    setcurrentUser({})
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        setIsLoggedIn,
        setcurrentUser,
        signout,
        signIn,
        fetchUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
