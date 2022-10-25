import React from "react";
import { useAuth } from "../../contexts/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}