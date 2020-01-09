import React from "react";
import { WrapTabBottom, TabBottomStyle, Container } from "./styled";

const TabBottom = () => (
  <WrapTabBottom>
    <Container>
      <TabBottomStyle>
        <div>Home</div>
        <div>Add Pokemon</div>
        <div>My List</div>
      </TabBottomStyle>
    </Container>
  </WrapTabBottom>
);

export default TabBottom;
