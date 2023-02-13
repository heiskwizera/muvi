import React from "react";
import { View, Image, StyleSheet } from "react-native";

import {uiProps} from "../config";

function AppLogo({ logo,style }) {
  return (
    <View style={[styles.logoContainer,style]}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 32,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: uiProps.padding.medium,
    padding: 50,
  },
  

});
export default AppLogo;
