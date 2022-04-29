import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequirAuth = ({ children }) => {
  const [user, userLoading] = useAuthState(auth);
  let location = useLocation();
  if (userLoading) {
    return <p>Loading...</p>;
  }
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  return children;
};

export default RequirAuth;
