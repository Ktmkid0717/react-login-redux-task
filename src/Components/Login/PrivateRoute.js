import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ user, redirectPath, children }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <Navigate to="/auth" />;
  }

  // return children;
};

export default PrivateRoute;
