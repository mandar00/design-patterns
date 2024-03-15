import React from "react";
import SplitScreen from "./split_screen";

const Left = () => {
  return <h2>I am Left</h2>;
};
const Right = () => {
  return <h2>I am Right</h2>;
};
const SplitScreenComponent = () => {
  return (
    <SplitScreen LeftCompWidth={1} RightCompWidth={2}>
      <Left />
      <Right />
    </SplitScreen>
  );
};
export default SplitScreenComponent;
