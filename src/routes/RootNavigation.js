import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather,AntDesign  } from '@expo/vector-icons'; 
import { paths, uiProps } from "../config";

import SearchStackNavigator from "./SearchStack";
import ListingStack from "./ListingStack";
import { ProfileScreen } from "../screens/Profile";
import AccountEdit from "../screens/AccountEdit";
import { Screen } from "../components";

import { Text,View } from 'react-native';
import TopStack from "./TopStack";
import { Player } from "../screens";

const Tab = createBottomTabNavigator();


function RootNavigation() {
    return (
      <Screen>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === paths.HOME) {
              iconName = "home";
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === paths.LISTING) {
              iconName = "folder";
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === paths.SEARCH) {
              iconName = "search";
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === paths.ACCOUNT) {
              iconName = "appstore-o";
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          },
          tabBarLabel: () => null,
          headerShown : false,
          tabBarStyle: {
            backgroundColor: "#0a1324",
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: "#f9bf02",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#0a1324",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        })}
      
  
      
  
      >
        <Tab.Screen name={paths.HOME} component={TopStack} />
        <Tab.Screen name={paths.SEARCH} component={SearchStackNavigator} />
        <Tab.Screen name={paths.LISTING} component={ListingStack} />
        <Tab.Screen name={paths.ACCOUNT} component={ProfileScreen}
        options={{
          //
          headerShown: false
        }}
        
        />
        <Tab.Screen name={paths.VIDEO_PLAYER} component={Player} 
        options={{ tabBarVisible: false, tabBarButton: () => null }}
        />
        <Tab.Screen name={paths.ACCOUNT_EDIT} component={AccountEdit} 
        options={{ tabBarVisible: false, tabBarButton: () => null }}
        />
      </Tab.Navigator>
      </Screen>
    );
  }

export default RootNavigation;