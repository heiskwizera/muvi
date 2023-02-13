import React from "react";
import { StyleSheet, View } from "react-native";

import { uiProps } from "../config";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: uiProps.colors.light
  },
});

export default ListItemSeparator;
