import React, {useEffect} from "react";
import { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Screen,ListItem,ListItemSeparator,IconComponent as Icon, AppHeader } from "../components";
import { paths, uiProps } from "../config";
import AuthContext from "../auth/context";



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

  function AccountScreen({navigation}) {

    const {user, setUser} = useContext(AuthContext);

    const handleLogout = () => {
        setUser(null);
    }

    
    return (
      <Screen>
       <View style={styles.mainContainer}>
        <AppHeader />
       <View style={styles.container}>
          <ListItem
            title={user.username}
            subTitle={user.email}
            image={paths.PROFILE_PATH}
            renderRightActions={() => (
                <ListItem
                title="Edit"
                IconComponent={<Icon name="pencil" backgroundColor={uiProps.colors.accent} />}
                />
            )}
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
          onPress={handleLogout}
          
          />}
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
  
  