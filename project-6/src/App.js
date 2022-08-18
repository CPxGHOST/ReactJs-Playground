import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("App.js RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraph = useCallback(() => {
    setShowParagraph((oldState) => !oldState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
