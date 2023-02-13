import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Screen } from '../components';
import { paths } from '../config';
import { Player, Search } from '../screens';

const SearchStack = createStackNavigator();

function SearchStackNavigator() {
    return (
     
       <SearchStack.Navigator
      screenOptions={{
      headerShown: false,
      }}
      >
        <SearchStack.Screen name={paths.SEARCH_TAB} component={Search} />
        <SearchStack.Screen name={paths.VIDEO_PLAYER} component={Player} />
      </SearchStack.Navigator>
    
    );
  }
  

export default SearchStackNavigator;