import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, ScrollView,ActivityIndicator } from "react-native";

import { uiProps,paths } from "../config";
import { OtherMovies, ResMovies } from "../components/AppMovieCards";

import theMovieDb from "../api/Movies";


function MyList({ navigation }) {
  const [movie, setMovies] = useState([]);

  const loadMovie = async () => {
    const response = await theMovieDb.getUpcomingMovies();
    console.log('List',response.data.results);
    setMovies(response.data.results);
  };
  useEffect(() => {
    loadMovie();
  }, [movie]);



  return (
    <ScrollView style={{backgroundColor:uiProps.colors.dark}}>
      <View style={styles.container}>
        {movie.map ((item) => (
          <ResMovies
            key={item.id}
            poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            title={item.title}
            date={item.release_date}
            age={item.vote_average}
            overview={item.overview}
            onPress={() => navigation.navigate(paths.VIDEO_PLAYER, {
              videoId: item.id,
              poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              overview: item.overview,
              title: item.title,
              release_date: item.release_date,
              rate : item.vote_average,
            })}
          />
        ))}
          
     
        

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: uiProps.colors.dark,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        },
    list: {
        width: "100%",
        backgroundColor:uiProps.colors.primary,
        borderRadius:10
    }
});

export default MyList;
