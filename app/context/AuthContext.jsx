"use client";

import { Config } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const login = async (username, password) => {
    const response = await axios.post(`${Config.baseURL}/api/auth/login`, {
      username: username,
      password: password,
    });
    if (response.data) {
      Cookies.set("aluToken", response.data);
      router.push("/");
      dispatch({ type: "login", payload: username });
    }
  };

  const logout = () => {
    Cookies.remove("aluToken");
    router.replace("/login");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        token: Cookies.get("aluToken"),
      }}
    >
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
