import styled from "styled-components";
import { MediaQuery } from "../../utils";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    box-shadow: 2px 0px 25px #eaeaea;
    transform: scale(1.02);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-weight: bolder;
    text-transform: capitalize;
    margin-left: 30px;
    font-size: 1.2em;
  }
`;

export const ImageView = styled.div`
  text-align: center;
  img {
    max-width: 80px;
    max-height: 80px;
  }
  ${MediaQuery.smMin} {
    img {
      max-width: 100px;
    }
  }
`;

export const Number = styled.div`
  font-size: 1.5em;
  color: #ddd;
  font-weight: bold;
  ${MediaQuery.smMin} {
    font-size: 2em;
  }
`;
