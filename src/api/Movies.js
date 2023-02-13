import movieDbClient from "./Client";

const popularMovies = "/movie/popular";
const videos = "/movie/{movie_id}/videos";
const upcomingMovies = "/movie/upcoming";
const topRatedMovies = "/movie/top_rated";
const searchMovies = "/search/movie";

const getPopularMovies = () => movieDbClient.get(popularMovies);
const getVideos = (movieId) =>
  movieDbClient.get(videos.replace("{movie_id}", movieId));
const getUpcomingMovies = () => movieDbClient.get(upcomingMovies);
const getTopRatedMovies = () => movieDbClient.get(topRatedMovies);
const searchMovie = (query) =>
  movieDbClient.get(searchMovies, {
    query,
  })


export default {
  getPopularMovies,
  getVideos,
  getUpcomingMovies,
  getTopRatedMovies,
  searchMovie,
};
