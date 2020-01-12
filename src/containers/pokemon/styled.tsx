import styled from "styled-components";
import { MediaQuery } from "../../utils";

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
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  ${MediaQuery.smMin} {
    justify-content: stretch;
    margin-bottom: 40px;
  }
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
  width: 100%;
  color: #202124;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  ${MediaQuery.smMin} {
    padding: 20px;
    flex-direction: row;
  }
  .descript {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    order: 2;
    ${MediaQuery.smMin} {
      order: 1;
    }
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
  background-color: #fff;
  border-radius: 10px;
  order: 1;
  margin-bottom: 0;
  ${MediaQuery.smMin} {
    margin-bottom: 50px;
    order: 2;
  }
  img {
    max-height: 150px;
    max-height: 110px;
    ${MediaQuery.smMin} {
      max-width: 150px;
    }
  }
`;

export const LoadingMore = styled.div`
  font-weight: bold;
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  margin-bottom: 10px;
  align-items: center;
`;
