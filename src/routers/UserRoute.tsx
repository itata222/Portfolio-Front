import React, { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "../contexts/loginContext";

const UserRoute = ({ children }) => {
  const { adminData } = useContext(LoginContext);

  if (!adminData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserRoute;
