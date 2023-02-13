import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";

import { Home } from "../screens";
import { Screen } from "../components";
import { AppHeader } from "../components";
import { paths } from "../config";



const Tab = createMaterialTopTabNavigator();



function Series() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Series!</Text>
    </View>
  );
}

function Films() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Films!</Text>
    </View>
  );
}

function Originals() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Originals!</Text>
    </View>
  );
}

function TopStack() {
  return (
    <Screen>
      <AppHeader />
      <Tab.Navigator
      style={{backgroundColor:'#0a1324'}}
        screenOptions={{
          tabBarActiveTintColor: "#f9bf02",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            textTransform: "none",
            fontFamily:"Roboto"
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#f9bf02",
            height: 2,
            width: 22,
            marginLeft: 28
          },
          tabBarStyle: {
            backgroundColor: "#0a1324"
          }
        }}
      >
        <Tab.Screen name={paths.HOME_TAB_1} component={Home} />
        <Tab.Screen name={paths.HOME_TAB_2} component={Series} />
        <Tab.Screen name={paths.HOME_TAB_3} component={Films} />
        <Tab.Screen name={paths.HOME_TAB_4} component={Originals} />
      </Tab.Navigator>
    </Screen>
  );
}

export default TopStack;
