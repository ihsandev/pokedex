import styled from "styled-components";
import { PokemonTypeColor } from "../../utils";

const Tags = styled.span`
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  margin-right: 10px;
  font-size: 0.8em;
  background-color: ${({ color }: any) => PokemonTypeColor(color)};
`;

export default Tags;
