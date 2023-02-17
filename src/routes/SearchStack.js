import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import { paths, uiProps } from "../config";
import { Player, Search } from "../screens";

const SearchStack = createStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={paths.SEARCH_TAB}
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name={paths.VIDEO_PLAYER}
        component={Player}
        options={{
          headerShown: false,
          headerTitle: false,
          headerBackground: () => (
            <View style={{ backgroundColor: uiProps.colors.primary,
            marginTop:24
            }} />
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}

export default SearchStackNavigator;
