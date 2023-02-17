import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { uiProps, paths } from "../config";
import { Screen, AppLogo, AppButton, AppText } from "../components";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";

import AuthContext from "../auth/context";

function Stage({ navigation }) {

  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const watchMovie = () => {
    if(user) return navigation.navigate(paths.HOME);
    navigation.navigate(paths.LOGIN);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppLogo logo={paths.LOGO_PATH} style={styles.logoContainer} />
        <View style={styles.content}>
          <View style={styles.vectorImg}>
            <Image source={paths.VECTOR_PATH} style={styles.vector} />
          </View>
          <AppText style={styles.title}>Welcome to Muvi</AppText>
          <AppText style={styles.subtitle}>
            Free movie sreaming all you needs everytime and everywhere
          </AppText>

          <AppButton
            title="Watch Movie"
            onPress={watchMovie}
            style={{ width: 300 }}
          />
          <TouchableOpacity onPress={()=>{
            navigation.navigate(paths.LOGIN)
          }}>
          <AppText style={styles.text}>Sign in</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 30,
 
  },
  content: {
    marginTop:20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: uiProps.fontSizes.large,
    fontWeight: "bold",
    marginTop: 17,
  },
  subtitle: {
    fontSize: uiProps.fontSizes.medium + 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  vectorImg: {
    marginTop: -40,
  },
  vector: {
    width: 250,
    height: 200,
  },
});

export default Stage;
