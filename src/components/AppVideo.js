import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import YoutubeIframe from "react-native-youtube-iframe";

import AppButton from "./AppButton";
import { uiProps } from "../config";
import AppText from "./AppText";

function AppVideo({ videoId, poster, title, overview, release_date, rate, ...props }) {
  const [playing, setPlaying] = useState(false);
  const [playText, setPlayText] = useState("Play");
  const [playIcon, setPlayIcon] = useState("play");

  useEffect(() => {
    setPlaying(false);
    setPlayText("Play");
    setPlayIcon("play");
  }, []);

  return (
    <View>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
        

      
      />
      <View style={styles.playerContainer}>
        {playing ? (
          <View>
            <YoutubeIframe
              height={250}
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
          </View>
        ) : (
          <ImageBackground
            source={{
              uri: `${poster}`,
            }}
            imageStyle={{
              borderRadius: 5,
              flex:1,
              opacity: 0.2,
              backgroundColor: "transparent",
            }}
            style={styles.content}
          >
            <Image
              source={{
                uri: `${poster}`,
              }}
              style={{
                width: "40%",
                height: "100%",
                alignSelf: "center",
                marginVertical: 20,
                backgroundColor: "black",
              }}
            />

          </ImageBackground>
        )}
      </View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.smText}> {release_date}</AppText>

      <AppButton
      title={playText}
      logo={playIcon}
      iconFamily="Feather"
      style={{
        flexDirection:'row',
        borderRadius:4
      }}
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


      <View style={styles.btnContainer}>
       
        
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
        <AppButton
          title="Download"
          logo={"download"}
          bgIcon={uiProps.colors.accent}
          iconFamily="Feather"
          style={styles.myListBtn}
          textStyle={{
            color: uiProps.colors.white,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    width: "100%",
    borderRadius: uiProps.borderRadius.small - 2,
    height: 300,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: uiProps.colors.dark,
  },
  content: {
    width: "100%",
    height: "90%",
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  webview: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: uiProps.colors.accent,
    marginTop: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium,
    marginTop: 10,
    fontWeight: "bold",
  },
  smText: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium - 3,
    marginTop: -10,
  },
});

export default AppVideo;
