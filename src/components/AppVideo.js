import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

import AppButton from "./AppButton";
import { uiProps } from "../config";

function AppVideo({ videoId, poster }) {
  const [playing, setPlaying] = useState(false);
  const [playText, setPlayText] = useState("Play");
  const [playIcon, setPlayIcon] = useState("play");

  useEffect(() => {
    setPlaying(false);
    setPlayText("Play");
    setPlayIcon("play");
  }, []);

  return (
    <>
      <View style={styles.playerContainer}>
        {playing ? (
          <YoutubeIframe
            height={200}
            webViewStyle={styles.webview}
            videoId={videoId}
            play={playing}
            onChangeState={(event) => {
              if (event === "ended") {
                setPlaying(false);
                setPlayText("Play");
                setPlayIcon("play");
              }
            }}
          />
        ) : (
          <Image
            source={{
              uri: `${poster}`,
            }}
            style={styles.content}
          />
        )}
      </View>

      <View
        style={styles.btnContainer}
      >
        <AppButton
          title={playText}
          logo={playIcon}
          bgIcon="black"
          iconFamily="Feather"
          style={styles.playerBtn}
          onPress={() => {
            setPlaying(true);
            if (playing) {
              setPlayText("Play");
              setPlayIcon("play");
            } else {
              setPlayText("Stop");
              setPlayIcon("stop-circle");
            }
            setPlaying(!playing);
          }}
        />
        <AppButton
          title="My List"
          logo="plus"
          bgIcon={uiProps.colors.accent}
          iconFamily="Feather"
          textStyle={{
            color: uiProps.colors.white,
          }}
          style={styles.myListBtn}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    width: "95%",
    margin: 5,
    borderRadius: uiProps.borderRadius.small - 2,
    height: 200,
    justifyContent: "center",
    textAlign: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    marginHorizontal: 5,
    marginLeft: 5,
  },
  webview: {
    marginHorizontal: 5,
    marginLeft: 5,
    width: "100%",
    borderRadius: 5,
    height: 200,
  },
  playerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "45%",
    fontSize: uiProps.fontSizes.medium - 3,
    borderRadius: uiProps.borderRadius.small,
    marginHorizontal: 10,
  },
  myListBtn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "45%",
    borderWidth: 1,
    borderColor: uiProps.colors.white,
    backgroundColor: uiProps.colors.dark,
  },
  btnContainer: {
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  }
});

export default AppVideo;
