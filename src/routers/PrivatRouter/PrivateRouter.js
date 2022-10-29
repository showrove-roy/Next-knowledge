import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthInfo } from "../../contexts/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user } = useAuthInfo();
  const location = useLocation();

  if (user.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRouter;
