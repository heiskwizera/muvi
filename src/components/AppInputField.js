import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Hoshi } from "react-native-textinput-effects";
import { StyleSheet, View } from "react-native";

import { uiProps } from "../config";
import AppText from "./AppText";



function AppInputField({ icon, label, isTouch = false, errorMessage, ...otherProps }) {
  return (
    <View>
      <Hoshi

        label={label}
        {...otherProps}


        placeholderTextColor={uiProps.colors.white}
        borderHeight={1}
        inputPadding={5}
        labelStyle={{ color: uiProps.colors.white, fontSize: uiProps.fontSizes.small, marginTop: 10, marginLeft: -5 }}
        inputStyle={{
          color: uiProps.colors.white,
          marginBottom: -10,
          fontWeight: uiProps.fontWeights.normal,
        }}
        style={styles.field}
        borderColor={uiProps.colors.white}

      />
      {isTouch && errorMessage && (
        <AppText style={styles.errMsg}>{errorMessage}</AppText>
      )}

      <Ionicons
        name={icon}
        size={20}
        color={uiProps.colors.accent}
        style={styles.icon}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  field: {
    marginTop: -1,
    width: "95%",
    marginHorizontal: 10,
    marginTop: 12,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 37,
  },
  errMsg: {
    color: uiProps.colors.error,
    fontSize: uiProps.fontSizes.small - 2,
    textAlign: "center",
    alignSelf: "flex-end",
    marginLeft: 5,
    marginBottom: -33,
    top: -28,
    right: -60,
    width: "70%",
  },
});

export default AppInputField;
