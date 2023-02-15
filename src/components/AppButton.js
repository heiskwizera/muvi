import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import { uiProps } from "../config";

function AppButton({ title, logo, bgIcon, iconFamily, style, textStyle, ...props }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {logo && !iconFamily && (
        <FontAwesome name={logo} size={24} color={bgIcon} />
      )}
      {logo && iconFamily && (
        <Feather name={logo} size={24} color={bgIcon} />
      )}

      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: uiProps.colors.accent,
    borderRadius: uiProps.borderRadius.medium,
    justifyContent: "center",
    alignItems: "center",
    padding: uiProps.padding.small,
    width: "95%",
    marginVertical: 5,
    alignSelf: "center",
  },
  text: {
    color: uiProps.colors.black,
    fontSize: uiProps.fontSizes.small,
    textAlign: "center",
    padding: uiProps.padding.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
