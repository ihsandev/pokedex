import React from "react";
import logo from "../assets/image/pokedex.png";
import { Link } from "react-router-dom";
import { HeaderStyle, Nav, Brand, Container } from "./styled";

const Header: React.FC = () => (
  <HeaderStyle>
    <Container>
      <Nav>
        <Link to="/home">
          <Brand>
            <img src={logo} alt="logo_pokedex" />
          </Brand>
        </Link>
      </Nav>
    </Container>
  </HeaderStyle>
);

export default Header;
