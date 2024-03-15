import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

const SplitScreen = ({ children, LeftCompWidth = 1, RightCompWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={LeftCompWidth}>{left}</Panel>

      <Panel flex={RightCompWidth}>{right}</Panel>
    </Container>
  );
};
export default SplitScreen;
