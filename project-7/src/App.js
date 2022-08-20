import React, { useState } from "react";
import "./App.css";
import Card from "./components/shared/card/Card";
import Button from "./components/shared/button/Button";
import Movies from "./components/movies/Movies";
import AddMovie from "./components/add-movie/AddMovie";

function App() {
  const [fetchMovieFlag, setfetchMovieFlag] = useState(false);
  const onClickHandler = () => {
    setfetchMovieFlag((oldState) => !oldState);
  };
  const onAddMovie = () => {
    setfetchMovieFlag((oldState) => !oldState);
  };
  return (
    <React.Fragment>
      <Card>
        <AddMovie onAddMovie={onAddMovie} />
      </Card>
      <Card>
        <Button onClick={onClickHandler}>Fetch Movies</Button>
      </Card>
      <Card>
        <Movies fetchMovieFlag={fetchMovieFlag} />
      </Card>
    </React.Fragment>
  );
}

export default App;
