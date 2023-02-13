import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { paths, uiProps } from "../config";

import { Screen, AppHeader, SearchBar, ResMovies } from "../components";
import useDebounce from "../utils/Helpers/Debounce";
import theMovieDb from "../api/Movies";

const loadIndicator = paths.LOADER_GIF;

function Search({ navigation }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 2000);

  const fetchMovies = async () => {
    setLoading(true);
    const {data} = await theMovieDb.searchMovie(search);
    setMovies(data.results);
    setLoading(false);

  };

  useEffect(() => {
    if (debouncedSearch) {
      fetchMovies();
    }
    if (!search) {
      setMovies([]);
      setLoading(false);
    }
  }, [debouncedSearch]);

  return (
    <Screen>
      <AppHeader />
      <View style={styles.container}>
        <SearchBar
          placeholder="Type title, category, years, etc"
          onChangeText={(text) => {setSearch(text)}}
          onChange={() => {
            setLoading(true);
            setMovies([]);
          }}
        />
      
      <ScrollView style={{backgroundColor:uiProps.colors.primary}}>
        {movies.map((movie) => (
          <ResMovies
            key={movie.id}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            date={movie.release_date}
            vote={movie.vote_average}
            overview={movie.overview}
            styles={styles}
            onPress={() => {
              navigation.navigate(paths.VIDEO_PLAYER, {
                videoId: movie.id,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                overview: movie.overview,
                title: movie.title,
                release_date: movie.release_date,
                rate : movie.vote_average,
              });
            }}
          />
        ))}
        {loading && (
          <View style={styles.container}>
            <View style={styles.loader}>
              <Image source={loadIndicator} />
            </View>
          </View>
        )}
      </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.primary,
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
});

export default Search;
