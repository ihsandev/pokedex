import React from "react";
import logo from "../assets/image/pokedex.png";
import { HeaderStyle, Nav, Brand, Search, Container } from "./styled";

const Header: React.FC = () => (
  <HeaderStyle>
    <Container>
      <Nav>
        <Brand>
          <img src={logo} alt="logo_pokedex" />
        </Brand>
        <Search>
          <input placeholder="Search pokemon" />
        </Search>
      </Nav>
    </Container>
  </HeaderStyle>
);

export default Header;
