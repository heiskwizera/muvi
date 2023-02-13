import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";

import { Screen, AppHeader } from "../components";
import {MyList} from "../screens";
import NoRecord from "../components/NoRecord";
import { paths, uiProps } from "../config";

const Tab = createMaterialTopTabNavigator();


function ListingStack() {
  return (
    <Screen >
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
            fontFamily:"Roboto",
            
          },
          tabBarContentContainerStyle:{
            
          },

          tabBarIndicatorStyle: {
            backgroundColor: "#f9bf02",
            height: 2,
            width: 22,
            marginLeft: 39
          },
          tabBarStyle: {
            backgroundColor: uiProps.colors.primary,
            width:200,

            shadowOffset: {
              width: 0,
              height: 0,
            },
                        
          }
        }}
      >
        <Tab.Screen name={paths.LISTING_TAB} component={MyList} />
        <Tab.Screen name={paths.LISTING_TAB_1} component={NoRecord} />
       
      </Tab.Navigator>
    </Screen>
  );
}

export default ListingStack;