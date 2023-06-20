import React from "react";

import SignUpFlow from "components/auth/SignUpFlow";

import stl from "./index.module.scss";

const Auth = () => {
  return (
    <div className={stl.auth}>
      <SignUpFlow />
    </div>
  );
};

export default Auth;
