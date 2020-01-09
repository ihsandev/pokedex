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
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ color }: any) => PokemonTypeColor(color)};
  margin-bottom: 50px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonDetail = styled.button`
  margin-top: 30px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border: 1.5px solid ${({ color }: any) => PokemonTypeColor(color)};
  border-radius: 50px;
  padding: 10px 30px;
  outline: none;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ color }: any) => PokemonTypeColor(color)};
    color: #fff;
  }
`;

export const LoadingMore = styled.div`
  margin-top: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
