import React,{useState,useEffect} from "react";
import { StyleSheet, ScrollView } from "react-native";

import { paths, uiProps } from "../config";
import { Screen, AppFooter, AppText, LgMovies, SmMovies } from "../components";

import theMovieDb from "../api/Movies";

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    loadMovies();
    loadUpcomingMovies();
  }, []);
  

  const loadMovies = async () => {
    const response = await theMovieDb.getPopularMovies();
    setMovies(response.data.results);
  };

  const loadUpcomingMovies = async () => {
    const response = await theMovieDb.getUpcomingMovies();
    setUpcomingMovies(response.data.results);
  };


  return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <AppText style={styles.sectionName}>Trending this week</AppText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          {movies.map((movie, index) => (
            <LgMovies
              key={index.toString()+movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              date={movie.release_date}
              age={movie.adult}
              onPress={() => props.navigation.navigate(paths.VIDEO_PLAYER, {
                videoId: movie.id,
                poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                overview: movie.overview,
                title: movie.title,
                release_date: movie.release_date,
                rate : movie.vote_average,
              })}
            />
          ))}
        
        </ScrollView>
        <AppText style={styles.sectionName}>Popular Movies</AppText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {movies.map((movie, index) => (
            <SmMovies
              key={index.toString()+movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              date={movie.release_date}
              age={movie.adult}
              onPress={() => props.navigation.navigate(paths.VIDEO_PLAYER, {
                videoId: movie.id,
                poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                overview: movie.overview,
                title: movie.title,
                release_date: movie.release_date,
                rate : movie.vote_average,
              })}
            />
          ))}
          
        </ScrollView>

        <AppFooter />
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.primary,
  },
  sectionName: {
    fontSize: uiProps.fontSizes.medium + 2,
    fontWeight: "bold",
    color: uiProps.colors.white,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginBottom: -8,
  },
});

export default Home;
