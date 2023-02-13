import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthNavigator from "./src/routes/AuthNavigator";
import RootNavigation from "./src/routes/RootNavigation";
import { useState, useEffect } from "react";
import AuthContext from "./src/auth/context";

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <RootNavigation /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
