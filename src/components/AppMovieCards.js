import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { uiProps } from "../config";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const LgMovies = ({  poster, title, date, age, onPress  }) => {
  return (
    <TouchableOpacity style={lgStyle.container} onPress={onPress} >
<ImageBackground source={{ uri:poster }} style={lgStyle.background}>
  <View style={lgStyle.bottomRight}>
    <View style={lgStyle.movieDetails}>
      <Text style={lgStyle.movieName}>{title}</Text>
    </View>
    <View style={lgStyle.movieInfo}>
      <Text style={lgStyle.hdText}>HD</Text>
      <Text style={lgStyle.movieYear}>{date}</Text>
      <Text style={lgStyle.plus}>+{age} </Text>
      <View style={lgStyle.watchTrailer}>
        <Text style={lgStyle.text}>Watch Trailer</Text>
      <Pressable
        style={lgStyle.playerIcon}
        onPress={{onPress}}
      >
        <Feather name="play" size={25} color="white" />
      </Pressable>
      </View>
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

const ResMovies = ({ poster, title, styles, date, vote, overview, list=false,...props }) => {
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
          <Text numberOfLines={3} style={resultStyle.description}>
            {overview}
          </Text>

          <View style={resultStyle.actionsStyle}>
            <TouchableOpacity style={resultStyle.watchContainer}>
              <Text style={resultStyle.watchBtn}>Watch</Text>
            </TouchableOpacity>
            {list && (
            <TouchableOpacity style={resultStyle.saveContainer}>
              <Text style={resultStyle.saveBtn}>Save to Watch</Text>
            </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const OtherMovies = ({ title, year, rating, poster, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <ImageBackground style={others.card} source={{ uri: poster }} >
        <View style={others.overlay}>
          <Text style={others.title}>{title}</Text>
          <View style={others.description}>
            <AppText style={others.hd}>HD</AppText>
            <AppText style={others.year}>{year}</AppText>
            <AppText style={others.rating}>{rating}</AppText>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const lgStyle = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Roboto',
  },
  background: {
    width: width * 0.90,
    height: height * 0.3,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: uiProps.borderRadius.medium,
    overflow: "hidden",
  },
  bottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    width: "100%",
  },
  movieDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  movieName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  movieInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  hdText: {
    color: "#fff",
    backgroundColor: "#f9bf02",
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
    borderRadius: 5,
  },
  movieYear: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  plus: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  text:{
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  playerIcon: {
    borderRadius: 10,
    marginLeft: 4,

  },
  watchTrailer:{
    padding: 5,
    marginLeft: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }

});

const smStyles = StyleSheet.create({
  movieContainer: {
    width: width / 2 - 20,
    height: height / 2 - 20,
    marginHorizontal: -3,
    borderRadius: uiProps.borderRadius.medium,
    overflow: "hidden",
    padding: 10,
    marginLeft: 5,
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


const others = StyleSheet.create({
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

export { LgMovies, SmMovies, ResMovies, OtherMovies};
