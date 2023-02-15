import { clientApi } from "./Client";

const loginEndpoint = "/login";
const signUpEndpoint = "/signup";

const loginEndpoint2 = "users/login";


const login = (email,password)=>clientApi.post(loginEndpoint2,{
    email,
    password
});

const signUp = (username,email,password)=>clientApi.post(signUpEndpoint,{
    username,
    email,
    password
});

export default {
    login,
    signUp
}
