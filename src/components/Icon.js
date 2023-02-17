import React from "react";
import { View } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

function setIcon(iconFamily, name, size, iconColor) {
  switch (iconFamily) {
    case "ADI":
      return <AntDesign name={name} color={iconColor} size={size} />;
      break;
    case "FI":
      return <Feather name={name} color={iconColor} size={size} />;
      break;
    case "MI":
      return <MaterialIcons name={name} color={iconColor} size={size} />;
      break;
    case "OI":
      return <Octicons name={name} color={iconColor} size={size} />;
      break;
    default:
      return <MaterialCommunityIcons name={name} color={iconColor} size={size} />;
      break;
  }
}

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  iconFamily,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {setIcon(iconFamily,name,size,iconColor)}
    </View>
  );
}

export default Icon;
