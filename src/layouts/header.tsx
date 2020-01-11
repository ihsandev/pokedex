import React from "react";
import logo from "../assets/image/pokedex.png";
import { Link } from "react-router-dom";
import { HeaderStyle, Nav, Brand, Search, Container } from "./styled";

const Header: React.FC = () => (
  <HeaderStyle>
    <Container>
      <Nav>
        <Link to="/home">
          <Brand>
            <img src={logo} alt="logo_pokedex" />
          </Brand>
        </Link>
        <Search>
          <input placeholder="Search pokemon" />
        </Search>
      </Nav>
    </Container>
  </HeaderStyle>
);

export default Header;
