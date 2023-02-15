import React from 'react';
import { StyleSheet, View, FlatList } from "react-native";
import { Screen,ListItem,ListItemSeparator,IconComponent as Icon, AppHeader } from "../components";
import { paths, uiProps } from "../config";

import useAuth from '../auth/useAuth';


const menuItems = [
    {
      title: "Settings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: uiProps.colors.primary
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor:uiProps.colors.accent
      },
    },
  ];

  function AccountScreen() {

    const {user, logOut} = useAuth();
    return (
      <Screen>
       <View style={styles.mainContainer}>
        <AppHeader />
       <View style={styles.container}>
          <ListItem
            title={user.name}
            subTitle={user.email}
            image={paths.PROFILE_PATH}
            
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor={uiProps.colors.accent}
          
          />}
          onPress={()=>logOut()}
        />
       </View>
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    mainContainer: {
        backgroundColor: uiProps.colors.dark
    }
  });
  
  export default AccountScreen;
  
  