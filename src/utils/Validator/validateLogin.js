import * as Yup from "yup";
const validateLogin = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password required"),
});

export default validateLogin;