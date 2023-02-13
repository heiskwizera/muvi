import React from "react";
import { useState, useRef } from "react";
import {
  Dimensions,
  Animated,
  Easing,
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";

import {Captions, uiProps} from "../../config";
import Paginater from "./Pagination";

const { width, height } = Dimensions.get("screen");

function AppCaptions(props) {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Captions}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Paginater data={Captions} scrollX={scrollX} index={index} />
    </View>
  );
}

function SlideItem({ item }) {
  const translateYImage = new Animated.Value(40);
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    top: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: uiProps.fontWeights.bold,
    color: uiProps.colors.white,
    textShadowOffset: { width: 1, height: 1 },
    opacity: 1,
    marginLeft: 10,
  },
  description: {
    fontSize: uiProps.fontSizes.medium,
    color: uiProps.colors.white,
    marginLeft: 10,
  },
});

export default AppCaptions;
