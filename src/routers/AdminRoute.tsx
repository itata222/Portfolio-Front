import React, { useContext } from "react";
import { Navigate, Route } from "react-router";
import { LoginContext } from "../contexts/loginContext";

const AdminRoute = ({ children }) => {
  const { adminData } = useContext(LoginContext);

  if (!adminData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
