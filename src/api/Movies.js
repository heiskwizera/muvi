import movieDbClient from "./Client";


const POPULAR_MOVIES = "/movie/popular";
const VIDEOS = "/movie/{movie_id}/videos";
const UPCOMING_MOVIES = "/movie/upcoming";
const TOP_RATED_MOVIES = "/movie/top_rated";
const SEARCH_MOVIES = "/search/movie";

const getPopularMovies = () =>
  movieDbClient.get(POPULAR_MOVIES);

const getVideos = (movieId) =>
  movieDbClient.get(VIDEOS.replace("{movie_id}", movieId));


  
const getUpcomingMovies = () => movieDbClient.get(UPCOMING_MOVIES);
const getTopRatedMovies = () => movieDbClient.get(TOP_RATED_MOVIES);


const searchMovie = (query) =>
  movieDbClient.get(SEARCH_MOVIES, {
    query,
  })


export default {
  getPopularMovies,
  getVideos,
  getUpcomingMovies,
  getTopRatedMovies,
  searchMovie,
};
