"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import Login from "../login/page";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token) return router.replace("/login");
  }, [pathname, token]);
  return <>{children}</>;
};

export default ProtectedRoute;
