// I am receiving poster image from themovie db api and display them in landscape card
// Write a function to validate image size and return true if it has dimensions of landscape

import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const isLandscape = (width, height) => {
  return width > height;
};
