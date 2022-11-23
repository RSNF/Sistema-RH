import React from "react";
import { useAuth } from "../../contexts/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  
  if (!auth.isAuthenticated && !getCookie('auth-token')) {
    return <Navigate to="/login" />;
  }
  
  return children;
};
