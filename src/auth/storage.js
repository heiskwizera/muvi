import * as secureStore from "expo-secure-store";
import { AUTH_KEY,INFO_KEY } from "@env";
import jwtDecode from "jwt-decode";

const storeToken = async (authToken) => {
  try {
    await secureStore.setItemAsync(AUTH_KEY, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await secureStore.getItemAsync(AUTH_KEY);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await secureStore.deleteItemAsync(AUTH_KEY);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};


const storeUserInfo = async (userInfo) => {
  try {
    await secureStore.setItemAsync(INFO_KEY, userInfo);
  } catch (error) {
    console.log("Error storing the user info", error);
  }
};

const getUserInfo = async () => {
  try {
    return await secureStore.getItemAsync(INFO_KEY);
  } catch (error) {
    console.log("Error getting the user info", error);
  }
};

const removeUserInfo = async () => {
  try {
    await secureStore.deleteItemAsync(INFO_KEY);
  } catch (error) {
    console.log("Error removing the user info", error);
  }
};


const getUser = async() => {
  const token = await getToken();
  const userInfo = JSON.parse(await getUserInfo());
  if (!token) return;
  return {
    userId: jwtDecode(token).id,
    user: userInfo,
  };
};

export default { getUser, storeToken, removeToken,storeUserInfo,getUserInfo,removeUserInfo };