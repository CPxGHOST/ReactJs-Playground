import React, { useCallback, useEffect, useState } from "react";
import Card from "../shared/card/Card";
import MovieList from "./movie-list/MoviesList";
import { GetMovies } from "./services/MoviesService";
const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  const LoadMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const getMovies = await GetMovies();
      setMovies(getMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    LoadMovies();
  }, [LoadMovies, props.fetchMovieFlag]);

  let content = <p>No Movies found.</p>;
  if (error) {
    content = <p>Something went wrong</p>;
  } else if (isLoading) {
    content = <p>Loading....</p>;
  } else if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  return <Card>{content}</Card>;
};
export default Movies;
