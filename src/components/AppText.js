import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {uiProps} from "../config";

function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.small,
    textAlign: "center",
    padding: uiProps.padding.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppText;
