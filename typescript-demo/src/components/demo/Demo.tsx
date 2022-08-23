import { useState } from "react";

const Demo = () => {
  const [message, setMessage] = useState("");
  const onClickHandler = () => {
    setMessage("Button Clicked!");
  };
};
export default Demo;
