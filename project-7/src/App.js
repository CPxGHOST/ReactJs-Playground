import React from "react";
import "./App.css";
import Card from "./components/shared/card/Card";
import Button from "./components/shared/button/Button";
import Movies from "./components/movies/Movies";
function App() {
  return (
    <React.Fragment>
      <Card>
        <Button>Fetch Movies</Button>
      </Card>
      <Card>
        <Movies />
      </Card>
    </React.Fragment>
  );
}

export default App;
