import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? <Component /> : <Navigate to="/" replace />}</>;
};

export default PrivateRoute;
