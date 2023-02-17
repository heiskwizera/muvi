import React, {useState,useEffect} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator,View,Linking } from 'react-native';
import { AppVideo, AppHeader,Screen, AppText } from '../components';
import { StatusBar } from 'expo-status-bar';
import {Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome, Entypo} from '@expo/vector-icons';

import { uiProps } from '../config';

import theMovieDb from "../api/Movies";

function Player({route}) {
  const [movie, setMovie] = useState([]);
  const {videoId,poster, title, overview, release_date, rate} = route.params;


  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  const loadMovie = async () => {
    setMovie([]);
    const response = await theMovieDb.getVideos(videoId);
    setMovie(response.data.results);
  };


  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

        {movie.length === 0 ? (
          <ActivityIndicator size="large" color={uiProps.colors.primary} />
        ) : (
          <AppVideo
            videoId={movie[0].key}
            poster={poster}
            title={title}
            release_date={release_date}
            rate={rate}
            
          />
        )}
        <AppText style={styles.title}>{title}
        </AppText>
        <AppText style={styles.overview}>{overview}</AppText>

        <View
        style={styles.meta}
        >
          <AppText style={{color: uiProps.colors.white, fontSize: 16, fontWeight: uiProps.fontWeights.bold,}}>Release Date: {release_date}</AppText>
          <AppText style={{color: uiProps.colors.white, fontSize: 16, fontWeight: uiProps.fontWeights.bold,}}>Rating: {rate}</AppText>

        </View>
        <View style={styles.linkSharer}>

        <AppText style={{color: uiProps.colors.white, fontSize: 16, fontWeight: uiProps.fontWeights.bold,}}>
        <Entypo name="share" size={24} color={uiProps.colors.white} />
          Share this movie with your friends</AppText>
        {/* Whatsapp , Facebook, Twitter , Instagram */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom:70 }}>
          <Feather name="facebook" size={24} color={uiProps.colors.white} onPress={() => Linking.openURL(`https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=${movie[0].key}`)} />
          <FontAwesome name="instagram" size={24} color={uiProps.colors.white} onPress={() => Linking.openURL(`https://www.instagram.com/?url=https://www.youtube.com/watch?v=${movie[0].key}`)} />
        <FontAwesome name="whatsapp" size={24} color={uiProps.colors.white} onPress={() => Linking.openURL(`https://api.whatsapp.com/send?text=Check%20out%20this%20movie%20on%20YouTube%20https://www.youtube.com/watch?v=${movie[0].key}`)} />
        </View>
        </View>


        

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.dark,
    marginTop: -24,
  },
  title: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium + 2,
    marginLeft: 12,
    fontWeight: uiProps.fontWeights.bold,
    width: '100%',
    justifyContent:'flex-start',
    textAlign: 'left',
  },
  overview: {
    color: uiProps.colors.white,
    fontSize: 16,
    marginTop: -10,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  linkSharer: {
    marginHorizontal: 10,
    marginTop: 10,
  }



})

export default Player;