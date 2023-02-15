import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser, setUserId } = useContext(AuthContext);
   
  const signUp = userData => {
    const user = userData.data.data || userData.data;
    const token = userData.data.token || userData.data.data.token;
    setUser(user);
    setUserId(user.id);
    authStorage.storeToken(token);
    authStorage.storeUserInfo(JSON.stringify(user));
  };


   const logIn = userData => {
    const user = userData.data.data || userData.data;
    const token = userData.data.token || userData.data.data.token;
    setUser(user);
    setUserId(user.id);
    authStorage.storeToken(token);
    authStorage.storeUserInfo(JSON.stringify(user));
  };

  const logOut = () => {
    setUserId(null);
    setUser(null);
    authStorage.removeToken();
    authStorage.removeUserInfo();
  };

  return {
    user,
    signUp,
    logIn,
    logOut,
  };
};
