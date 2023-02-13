import * as Yup from "yup";

const validateRegister = Yup.object().shape({
  email: Yup.string().required("Email required").email("Invalid email"),
  password: Yup.string()
    .required("Password required")
    .min(4, "4 characters minimum"),
  username: Yup.string().required("Username required"),
  
});

export default validateRegister;