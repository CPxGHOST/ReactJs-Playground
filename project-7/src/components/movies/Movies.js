import React, { useEffect, useState } from "react";
import Card from "../shared/card/Card";
import MovieList from "./movie-list/MoviesList";
const Movies = (props) => {
  return (
    <Card>
      <MovieList movies={props.movies} />
    </Card>
  );
};
export default Movies;
