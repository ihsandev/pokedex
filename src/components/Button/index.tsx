import { PokemonTypeColor } from "../../utils/_functions";
import styled from "styled-components";

const Button: any = styled.button`
  margin-top: ${({ top }: any) => top}px;
  margin-bottom: ${({ bottom }: any) => bottom}px;
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

export default Button;
