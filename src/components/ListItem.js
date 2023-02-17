import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import { paths, uiProps } from "../config";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
 
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={uiProps.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>

          <View styles={styles.editPage}>
            <TouchableOpacity onPress={onPress}>
              <AppText style={styles.edit}>Edit Profile</AppText>
            </TouchableOpacity>
          </View>
          
        
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: uiProps.colors.primary,
    justifyContent:"flex-start",
    alignItems:"center",
    marginBottom: 5,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    marginTop: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: uiProps.colors.white,
    marginLeft: 15,
    marginBottom: 5,

  },
  title: {
    fontWeight: uiProps.fontWeights.bold,
    color: uiProps.colors.white,
    marginBottom: -15,
    marginLeft : 15,
    alignSelf:"flex-start"
    
  },
  edit: {
    color: uiProps.colors.accent,
    fontSize: uiProps.fontSizes.small,
    alignSelf: "center",
    marginLeft: 30,

  },
});

export default ListItem;
