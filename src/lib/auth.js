const signup = [
  {
    placeholder: "Enter your fullname",
    label: "Fullname",
    id: "fullname",
    type: "text",
  },
  {
    placeholder: "Enter your email",
    label: "Email",
    id: "email",
    type: "text",
  },
  {
    placeholder: "Enter your password",
    label: "Password",
    id: "pass",
    type: "password",
  },
  {
    placeholder: "Confirm your password",
    label: "Confirm password",
    id: "confpass",
    type: "password",
  },
];

const signin = [
  {
    placeholder: "Enter your email",
    label: "Email",
    id: "email",
    type: "text",
  },
  {
    placeholder: "Enter your password",
    label: "Password",
    id: "pass",
    type: "password",
  },
];

const getFields = (method) => {
  switch (method) {
    case "signup":
      return signup;
    case "signin":
      return signin;
    default:
      return signup;
  }
};

export default getFields;
