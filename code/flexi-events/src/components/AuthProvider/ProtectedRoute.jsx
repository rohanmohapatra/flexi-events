import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import React from "react";

export const ProtectedRoute = ({ children }) => {
  const { getToken } = useAuth();

  if (!getToken()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
