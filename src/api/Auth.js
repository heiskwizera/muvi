import { clientApi } from "./Client";

const loginEndpoint = "/login";
const signUpEndpoint = "/signup";


const login = (email,password)=>clientApi.post(loginEndpoint,{
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
