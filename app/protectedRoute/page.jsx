"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
// import Login from "../login/page";
import Home from "../page";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.push("/login");
  //     }
  //   }, [isAuthenticated, router]);
  return isAuthenticated ? children : <Home />;
};

export default ProtectedRoute;
