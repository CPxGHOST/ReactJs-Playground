import React, { useState } from "react";
import "./App.css";
import Card from "./components/shared/card/Card";
import Button from "./components/shared/button/Button";
import Movies from "./components/movies/Movies";
import { GetMovies } from "./components/movies/services/MovieService";
function App() {
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
  const [movies, setMovies] = useState(dummyMovies);
  const onClickHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((result) => {
          const newResult = {
            id: result.episode_id,
            title: result.title,
            openingText: result.opening_crawl,
            releaseDate: result.release_date,
          };
          return newResult;
        });
        setMovies(transformedMovies);
      })
      .catch((error) => console.log(`Error in get films call ${error}`));
  };
  return (
    <React.Fragment>
      <Card>
        <Button onClick={onClickHandler}>Fetch Movies</Button>
      </Card>
      <Card>
        <Movies movies={movies} />
      </Card>
    </React.Fragment>
  );
}

export default App;
