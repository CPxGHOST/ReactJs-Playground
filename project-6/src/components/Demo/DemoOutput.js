import React from "react";
const DemoOutput = (props) => {
  console.log("DemoOutput.js RUNNING");
  return <p>{props.show ? "Hello World" : ""}</p>;
};
export default React.memo(DemoOutput);
