import styled from "styled-components";
import { PokemonTypeColor } from "../../utils/_functions";
import { MediaQuery } from "../../utils";

export const Box = styled.div`
  background-color: ${({ color }: any) => PokemonTypeColor(color)};
  width: auto;
  padding: 20px;
  border-radius: 25px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  ${MediaQuery.smMin} {
    > div {
      flex-direction: row;
    }
  }
`;

export const HeadDetail = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
  h2 {
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
`;

export const BodyDetail = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${MediaQuery.smMin} {
    width: inherit;
  }
  .descript {
    display: flex;
    flex-direction: column;
    > div {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:last-of-type {
        border-bottom: none;
      }
      display: flex;
      span:nth-of-type(1) {
        margin-right: 25px;
      }
      span:nth-of-type(2) {
        font-weight: bold;
      }
    }
  }
`;

export const PokemonImage = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  img {
    max-height: 200px;
    max-width: 200px;
  }
  ${MediaQuery.smMin} {
    width: inherit;
    text-align: inherit;
  }
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 20px;
`;

export const TitleMore = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const EvolutionCard = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Moredetail = styled.div`
  > div {
    margin-bottom: 20px;
    display: flex;
    span:nth-of-type(1) {
      width: 150px;
    }
  }
  > .moves {
    border: 1px solid gray;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    > span {
      margin-bottom: 15px;
    }
    flex-direction: column;
  }
`;

export const Moves = styled.div`
  display: flex;
  flex-wrap: wrap;
  > span {
    margin-bottom: 10px;
  }
`;
