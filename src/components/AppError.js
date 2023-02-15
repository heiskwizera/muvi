import React from "react";
import { View } from "react-native";
import AppText from "./AppText";
import { uiProps } from "../config";

function AppError({ isError, error }) {
  return (
    <View>
      {isError && (
        <AppText
          style={{
            color: uiProps.colors.danger,
          }}
        >
          {error}
        </AppText>
      )}
    </View>
  );
}

export default AppError;
