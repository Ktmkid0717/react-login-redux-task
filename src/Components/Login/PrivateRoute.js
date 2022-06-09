import React from "react";
import { Navigate } from "react-router-dom";
import { selectUser } from "../Redux/userReducer";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const auth = user;
  return auth ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
