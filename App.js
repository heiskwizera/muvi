import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/routes/AuthNavigator";
import RootNavigation from "./src/routes/RootNavigation";
import { useState } from "react";

import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";
import useAsyncTask from "./src/utils/Hooks/useAsyncTask";

export default function App() {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [appLoaded, setAppLoaded] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    setUser(user?.user);
    setUserId(user?.userId);
  };

  useAsyncTask(restoreUser, () => setAppLoaded(true));

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        user,
        setUser,
      }}
    >
      {appLoaded && (
        <NavigationContainer>
          {userId ? <RootNavigation /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
