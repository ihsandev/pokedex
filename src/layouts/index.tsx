import React from "react";
import Header from "./header";
import TabBottom from "./tabBottom";
import { Container, Content } from "./styled";

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>
      <Content>{children}</Content>
    </Container>
    <TabBottom />
  </>
);

export default MainLayout;
