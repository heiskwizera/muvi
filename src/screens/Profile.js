import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { paths, uiProps } from "../config";
import { ListItem, ListAccountMenu, IconComponent } from "../components";
import useAuth from '../auth/useAuth';


export const ProfileScreen = ({navigation}) => {
  const {user,logOut} = useAuth();
    
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More</Text>
        <Octicons name="inbox" size={28} color="white" />
      </View>

      <View style={styles.bg}>
        <View style={{ marginVertical: 20 }}>
          <ListItem
            title={user.name}
            subTitle={user.email}
            image={paths.PROFILE_PATH}
            onPress={() => navigation.navigate(paths.ACCOUNT_EDIT)}
          />
        </View>
        
        <View
          style={{
            backgroundColor: uiProps.colors.dark,
            padding: 15,
            height: 500,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginTop: 5,
            overflow: "hidden",
            borderRadius: 10,
          }}
        >
          <View
            style={{ borderBottomWidth: 1, borderColor: "white", padding: 10 }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Hi, {user.name}
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              42 times watched movie on Muvi
            </Text>
          </View>

          <ListAccountMenu
            title="Account Setting"
            IconComponent={
              <IconComponent
                name={"account-outline"}
                size={30}
                backgroundColor={uiProps.colors.dark}
              />
            }
          />
          <ListAccountMenu
            title="App Settings"
            IconComponent={
              <IconComponent
                name={"settings"}
                iconFamily="FI"
                size={30}
                backgroundColor={uiProps.colors.dark}
              />
            }
          />
          <ListAccountMenu
            title="Rate us on Appstore"
            IconComponent={
              <IconComponent
                name={"like2"}
                iconFamily="ADI"
                size={30}
                backgroundColor={uiProps.colors.dark}
              />
            }
          />

          <ListAccountMenu
            title="Help Center"
            IconComponent={
              <IconComponent
                name={"exclamationcircleo"}
                iconFamily="ADI"
                size={30}
                backgroundColor={uiProps.colors.dark}
              />
            }
          />

          <ListAccountMenu
            title="Logout"
            IconComponent={
              <IconComponent
                name={"logout"}
                iconFamily="MI"
                size={30}
                backgroundColor={uiProps.colors.dark}
              />
            }
           onPress={()=>{logOut()}}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: uiProps.colors.dark,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: uiProps.colors.accent,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  bg: {
    backgroundColor: uiProps.colors.primary,
  },
  userName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: -20,
  },
  userEmail: {
    color: "white",
    fontSize: 12,
    alignSelf: "center",
    marginBottom: -12,
  },
  editProfileButton: {
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
  },
  editProfileText: {
    color: uiProps.colors.accent,
    fontSize: 12,
    fontWeight: "bold",
  },
});
