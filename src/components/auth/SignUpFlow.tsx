import React from "react";

import AuthForm from "./AuthForm";

const SignUpFlow = () => {
  const [method, setMethod] = React.useState("signup");

  return (
    <AuthForm
      method={method}
      setMethod={setMethod}
      initVals={
        (method === "signup" && {
          fullname: "",
          email: "",
          pass: "",
          confpass: "",
        }) ||
        (method === "signin" && { email: "", pass: "" })
      }
    />
  );
};

export default SignUpFlow;
