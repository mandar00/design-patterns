import React from "react";
import { SmallButton,LargeRedButton } from "./partial-component";

const PartialController = () => {
  return (
    <>
      <SmallButton text={"I am small!"} />
      <LargeRedButton text="I am large and Red" />
    </>
  );
};
export default PartialController;
