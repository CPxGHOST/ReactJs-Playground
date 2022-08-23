import useCounter from "../hooks/UseCounter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(0, "-");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
