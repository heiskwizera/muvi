import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import {paths,uiProps} from "../config";

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image source={paths.LOGO_PATH} style={styles.logo} />
      </View>
      <View style={styles.right}>
        <MaterialCommunityIcons
          name="bookmark-outline"
          size={24}
          color={uiProps.colors.white}
          style={styles.icon}
        />
        <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: uiProps.colors.primary,
  },
  center: {
    alignItems: "center",
    padding: 17,
  },
  logo: {
    width: 100,
    height: 32,
    borderRadius: uiProps.padding.small,
  },
  right: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 15,
  },
  icon: {
    marginRight: 15
  }
});

export default AppHeader;
