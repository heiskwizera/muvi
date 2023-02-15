import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Text,
  Image,
} from "react-native";

import { uiProps } from "../config";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const LgMovies = ({ title, year, rating, poster, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <ImageBackground style={lgStyle.card} source={{ uri: poster }} >
        <View style={lgStyle.overlay}>
          <Text style={lgStyle.title}>{title}</Text>
          <View style={lgStyle.description}>
            <AppText style={lgStyle.hd}>HD</AppText>
            <AppText style={lgStyle.year}>{year}</AppText>
            <AppText style={lgStyle.rating}>{rating}</AppText>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const SmMovies = ({ title, poster, date, age, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View style={smStyles.movieContainer}>
        <Image source={{ uri: poster }} style={smStyles.poster} />
        <View style={smStyles.titleContainer}>
          <Text style={smStyles.title}>{title}</Text>
          <View style={smStyles.hdContainer}>
            <Text style={smStyles.hdLabel}>HD</Text>
          </View>
        </View>
        <View style={smStyles.dateContainer}>
          <Text style={smStyles.date}>{date}</Text>
          <Text style={smStyles.age}>{age}+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ResMovies = ({ poster, title, styles, date, vote, overview, ...props }) => {
  return (
    <View style={[resultStyle.searchResultContainer, styles]}>
      <TouchableOpacity
        style={resultStyle.card}
        {...props}
      >
        <Image
          style={resultStyle.image}
          source={{
            uri: `${poster}`,
          }}
        />
        <View style={resultStyle.info}>
          <Text style={resultStyle.title}>{title}</Text>
          <Text style={resultStyle.description}>
            {date} | {vote} | HD
          </Text>
          <Text numberOfLines={4} style={resultStyle.description}>
            {overview}
          </Text>

          <View style={resultStyle.actionsStyle}>
            <TouchableOpacity style={resultStyle.watchContainer}>
              <Text style={resultStyle.watchBtn}>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={resultStyle.saveContainer}>
              <Text style={resultStyle.saveBtn}>Save to Watch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const lgStyle = StyleSheet.create({
  card: {
    width: width * 0.90,
    height: height * 0.3,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: uiProps.borderRadius.medium,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    padding: uiProps.borderRadius.ten,
  },
  title: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.large - 4,
    fontWeight: uiProps.fontWeights.bold,
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  hd: {
    color: uiProps.colors.white,
    backgroundColor: uiProps.colors.accent,
    fontWeight: uiProps.fontWeights.bold,
    padding: 5,
    borderRadius: 5,
    marginRight: 3,
  },
  year: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium,
    fontWeight: uiProps.fontWeights.bold,
    marginRight: 3,
  },
  rating: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium,
    fontWeight: uiProps.fontWeights.bold,
    marginRight: 1,
  },
});

const smStyles = StyleSheet.create({
  movieContainer: {
    width: width / 2 - 20,
    height: height / 2 - 20,
    marginHorizontal: -3,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  poster: {
    width: "100%",
    height: "60%",
    borderRadius: 5,
  },
  titleContainer: {
    width: "100%",
    height: "15%",
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    flex: 1,
    color: "white",
  },
  hdContainer: {
    backgroundColor: "#f8bf01",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  hdLabel: {
    color: uiProps.colors.white,
    fontWeight: "bold",
  },
  dateContainer: {
    width: "100%",
    height: "15%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8bf01",
  },
  date: {
    fontSize: 14,
  },
  age: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

const resultStyle = StyleSheet.create({
  searchResultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    marginBottom: 10,
    width: "100%",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: uiProps.colors.white
  },
  description: {
    color: uiProps.colors.white,
    marginTop: 5,
  },
  actionsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  watchContainer: {
    backgroundColor: uiProps.colors.accent,
    padding: 5,
    borderRadius: 5,
  },
  watchBtn: {
    color: uiProps.colors.primary,
    fontWeight: uiProps.fontWeights.bold,
  },
  saveContainer: {
    backgroundColor: uiProps.colors.black,
    padding: 5,
    borderRadius: 5,
  },
  saveBtn: {
    color: uiProps.colors.white,
  },
});

export { LgMovies, SmMovies, ResMovies };
