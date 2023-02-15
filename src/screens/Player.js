import React, {useState,useEffect} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator,View } from 'react-native';
import { AppVideo, AppHeader,Screen, AppText } from '../components';

import { uiProps } from '../config';

import theMovieDb from "../api/Movies";

function Player({route}) {
  const [movie, setMovie] = useState([]);
  const {videoId,poster, title, overview, release_date, rate} = route.params;

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const response = await theMovieDb.getVideos(videoId);
    setMovie(response.data.results);
  };

  return (
    <Screen>
       <AppHeader />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

        {movie.length === 0 ? (
          <ActivityIndicator size="large" color={uiProps.colors.primary} />
        ) : (
          <AppVideo
            videoId={movie[0].key}
            poster={poster}
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



        

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.dark,
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


})

export default Player;