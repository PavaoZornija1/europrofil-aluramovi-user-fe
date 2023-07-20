"use client";
// import { Config } from "@/config";
// import axios from "axios";
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknow action");
  }
};

export const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const login = async (username, password) => {
  //   const response = await axios.post(`${Config.baseURL}/api/auth/login`, {
  //     username: username,
  //     password: password,
  //   });
  //   if (response.data) {
  //     dispatch({ type: "login", payload: username });
  //   }
  // };

  const login = () => {
    dispatch({ type: "login", payload: "user" });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside AuthProvider");
  return context;
};
