import { StyleSheet, Animated, View, Dimensions } from "react-native";

import { uiProps } from "../../config";

const { width } = Dimensions.get("screen");

const Paginater = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", "#f9bf02", "#ccc"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  dot: {
    width: 16,
    height: 6,
    borderRadius: uiProps.borderRadius.medium,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
  dotActive: {
    backgroundColor: uiProps.colors.accent,
  },
});

export default Paginater;
