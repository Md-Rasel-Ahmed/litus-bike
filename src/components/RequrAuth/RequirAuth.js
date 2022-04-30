import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spin from "react-loading";

import auth from "../../firebase.init";

const RequirAuth = ({ children }) => {
  const [user, userLoading] = useAuthState(auth);
  let location = useLocation();
  if (userLoading) {
    return (
      <Spin
        style={{ margin: "10px auto", height: "100px", width: "50px" }}
        type={"cylon"}
        color={"black"}
        height={100}
        width={50}
      />
    );
  }
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  return children;
};

export default RequirAuth;
