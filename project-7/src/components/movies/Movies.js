import React from "react";
import Card from "../shared/card/Card";
import MovieList from "./movie-list/MoviesList";
const Movies = (props) => {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];
  return (
    <Card>
      <MovieList movies={dummyMovies} />
    </Card>
  );
};
export default Movies;
