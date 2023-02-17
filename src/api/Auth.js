import { clientApi } from "./Client";

const LOGIN_ENDPOINT_LIVE = "/login";
const REGISTER_ENDPOINT_LIVE = "/signup";
const LOGIN_ENDPOINT_TEST = "/users/login";
const REGISTER_ENDPOINT_TEST = "/users";
const UPDATE_USER_ENDPOINT = "/users/{id}";


const login = (userCredentials)=>clientApi.post(LOGIN_ENDPOINT_TEST,userCredentials);
const signUp = (userInfo)=>clientApi.post(REGISTER_ENDPOINT_TEST,userInfo);

const updateUser = (userId,newData)=>clientApi.patch(UPDATE_USER_ENDPOINT.replace("{id}",userId),newData);

export default {
    login,
    signUp,
    updateUser
}
