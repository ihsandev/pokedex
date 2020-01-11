import React from "react";
import { Link, useLocation } from "react-router-dom";
import { WrapTabBottom, TabBottomStyle, Container } from "./styled";

const TabBottom = () => {
  const { pathname } = useLocation();
  return (
    <WrapTabBottom>
      <Container>
        <TabBottomStyle>
          <div className={pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </div>
          <div className={pathname === "/my-list" ? "active" : ""}>
            <Link to="/my-list">My List Pokemon</Link>
          </div>
        </TabBottomStyle>
      </Container>
    </WrapTabBottom>
  );
};

export default TabBottom;
