import React from "react";
import logo from "../assets/image/pokedex.png";
import { Link } from "react-router-dom";
import { HeaderStyle, Nav, Brand, Container, Search } from "./styled";
import { setKeyword } from "../config/redux/actions/pokemon";
import { connect } from "react-redux";

const Header: React.FC = ({ setKeyword }: any) => (
  <HeaderStyle>
    <Container>
      <Nav>
        <Link to="/home">
          <Brand>
            <img src={logo} alt="logo_pokedex" />
          </Brand>
        </Link>
        <Search>
          <input
            placeholder="Search pokemon.."
            onChange={(e: any) => setKeyword(e.target.value)}
          />
        </Search>
      </Nav>
    </Container>
  </HeaderStyle>
);

const mapDispatchToProps = {
  setKeyword
};
export default connect(null, mapDispatchToProps)(Header);
