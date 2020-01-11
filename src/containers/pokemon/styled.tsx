import styled from "styled-components";
import { PokemonTypeColor } from "../../utils/";

export const Total = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 0px 20px 0px;
  span {
    color: rgb(3, 151, 12);
    font-weight: bolder;
    margin-left: 5px;
  }
`;

// Quick Detail
export const HeadDetail = styled.div`
  display: flex;
  margin-bottom: 40px;
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
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  color: #202124;
  position: relative;
  .descript {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    > div {
      padding: 15px;
      border-bottom: 1px solid #eaeaea;
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
  position: absolute;
  top: 30px;
  right: 20px;
  width: 150px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
  img {
    max-height: 150px;
    max-width: 150px;
  }
`;

export const LoadingMore = styled.div`
  margin-top: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
