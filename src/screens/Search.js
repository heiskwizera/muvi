import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { paths, uiProps } from "../config";

import {
  Screen,
  AppHeader,
  SearchBar,
  ResMovies,
  AppButton,
  AppText,
} from "../components";
import useDebounce from "../utils/Hooks/useDebounce";
import theMovieDb from "../api/Movies";

const loadIndicator = paths.LOADER_GIF;

function Search({ navigation }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchIcon, setSearchIcon] = useState("search");

  const debouncedSearch = useDebounce(search, 2000);

  const fetchMovies = async () => {
    setLoading(true);
    const { data } = await theMovieDb.searchMovie(search);
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
      setSearch("");
    }
    if(searchIcon==="search"){
      setSearch("");
    }

  }, [debouncedSearch, searchIcon]);

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <SearchBar
          placeholder="Type title, category, years, etc"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          isIcon={searchIcon}
          handle={() => {
            setLoading(false);
            setSearchIcon("search");
            setMovies([]);
          }}
          onChange={() => {
            setLoading(true);
            setSearchIcon("delete");
            setMovies([]);
          }}
        />
        {movies.length === 0 && !loading && !search && (
          <View style={styles.recentSearch}>
            <View style={styles.buttons}>
              <AppButton
                title="Comedy"
                style={styles.btn}
                textStyle={styles.text}
              />
              <AppButton
                title="Thriller"
                style={styles.btn}
                textStyle={styles.text}
              />
              <AppButton
                title="Asian Dramas"
                style={styles.btn}
                textStyle={styles.text}
              />
              <AppButton
                title="US Top Action"
                style={styles.btn}
                textStyle={styles.text}
              />
              <AppButton
                title="Horror Comedy"
                style={styles.btn}
                textStyle={styles.text}
              />
            </View>

            <View style={styles.vectorImage}>
              <Image source={paths.SEARCH_VECTOR_PATH} />
            </View>
            <AppText style={styles.title}>Search Play and Enjoy</AppText>
            <AppText style={styles.subTitle}>
              Start typing a movie or series of your choice to watch Trailers on
              Muvi
            </AppText>
          </View>
        )}

        <ScrollView style={{ backgroundColor: uiProps.colors.primary }}>
          {movies.map((movie, index) => (
            <ResMovies
              key={index.toString() + movie.id}
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
                  rate: movie.vote_average,
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
          {movies.length === 0 && search && !loading && (
            <View style={styles.container}>
              <AppText style={styles.title}>
              No movies found for {search}
              </AppText>
            </View>
          )}


        </ScrollView>
      </View>
    </>
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
  recentSearch: {
    marginTop: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: uiProps.colors.white,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 17,
    color: uiProps.colors.white,
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btn: {
    margin: 5,
    width: 120,
    padding: -10,
    backgroundColor: uiProps.colors.primary,
    borderWidth: 1,
    borderColor: uiProps.colors.lightGray,
    color: uiProps.colors.white,
  },
  vectorImage: {
    marginTop: 20,
  },
  text: {
    color: uiProps.colors.lightGray,
  },
});

export default Search;
