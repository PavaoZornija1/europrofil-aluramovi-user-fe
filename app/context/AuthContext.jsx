"use client";
import { Config } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/ram/ramData";

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
  const router = useRouter();
  const dispatchLoggedUser = useDispatch();

  const storedUserData =
    typeof window !== "undefined" ? localStorage.getItem("userData") : false;
  const initialUserData = storedUserData ? JSON.parse(storedUserData) : null;

  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, {
    user: initialUserData,
    isAuthenticated: !!initialUserData,
  });
  const login = async (username, password) => {
    const response = await axios.post(
      `${Config.baseURL}/api/auth/customer-login`,
      {
        username: username,
        password: password,
      }
    );
    if (response.data) {
      Cookies.set("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data));
      dispatch({ type: "login", payload: response.data });
      dispatchLoggedUser(setUser(response.data));
      console.log(response.data);
    }
    router.push("/rams");
  };

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userData");
    router.push("/login");
    dispatch({ type: "logout" });
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) return;
    // authenticate(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        token: Cookies.get("token"),
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
