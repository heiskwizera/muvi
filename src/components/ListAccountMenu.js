import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import {uiProps} from "../config";

function ListAccountMenu({ IconComponent, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
      {IconComponent}
      <Text style={styles.title}>{title}</Text>
     <TouchableOpacity onPress={onPress} >
     <Feather
        name="chevron-right"
        size={30}
        color="white"
        style={{ marginLeft: 10 }}
      />
     </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 11,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: uiProps.fontSizes.medium,
    marginLeft: 10,
    marginTop:4,
    width:310,
  },
});

export default ListAccountMenu;
