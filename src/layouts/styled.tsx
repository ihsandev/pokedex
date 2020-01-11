import styled from "styled-components";
import { MediaQuery } from "../utils";

export const Container = styled.div`
  max-width: 575.98px;
  margin: 0 auto;
`;

// Content
export const Content = styled.div`
  padding: 70px 20px;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100vh;
`;

// Header
export const HeaderStyle = styled.header`
  background-color: rgb(3, 151, 12);
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
  ${MediaQuery.sm} {
    padding: 5px 10px;
  }
`;
export const Brand = styled.div`
  img {
    width: 100px;
  }
`;

export const Search = styled.div`
  input {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    outline: none;
    padding: 5px 10px;
    color: #fff;
    ::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    border-radius: 50px;
  }
`;

// Footer Tab Bottom
export const WrapTabBottom = styled.div`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
`;
export const TabBottomStyle = styled.div`
  background-color: rgb(3, 151, 12);
  /* padding: 20px 0;  */
  height: 55px;
  align-items: center;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  transition: all 0.2s ease;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #fff;
  }
  > div {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    &.active {
      background-color: #fff;
      a {
        color: rgb(3, 151, 12);
      }
    }
    &:hover {
      background-color: #fff;
      a {
        color: rgb(3, 151, 12);
      }
    }
  }
`;
