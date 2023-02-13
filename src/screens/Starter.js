import React from "react";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";

import { Screen, AppButton, AppCaptions } from "../components";
import { uiProps, paths } from "../config";

const height = Dimensions.get("window").height;

function Starter({ navigation }) {
  return (
    <Screen style={{ flex: 1 }}>
      <ImageBackground
        source={paths.BG_PATH}
        style={styles.background}
        imageStyle={styles.img}
      >
        <View style={styles.slidingContent}>
          <AppCaptions />
        </View>

        <View style={styles.btn}>
          <AppButton
            title="Get Started"
            onPress={() => navigation.navigate(paths.STAGE)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: uiProps.colors.black,
    position: "relative",
  },
  slidingContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: height * 0.1,
    backgroundColor: "transparent",
  },
  btn: {
    marginBottom: 15,
  },
  img:{
    opacity: 0.3 
  }
});

export default Starter;
