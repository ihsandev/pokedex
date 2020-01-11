import React from "react";
import { Wrapper, ImageView, MainWrapper, Number } from "./styled";

export interface PropsCard extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  src?: string;
  id?: any;
}
const CardListPokemon: React.FC<PropsCard> = ({ name, src, id, ...props }) => {
  return (
    <MainWrapper {...props}>
      <Wrapper>
        <ImageView>
          <img src={src} alt="pokemon" />
        </ImageView>
        <div>
          <h3>{name}</h3>
        </div>
      </Wrapper>
      <Number>#{id < 10 ? `0${id}` : id}</Number>
    </MainWrapper>
  );
};

export default CardListPokemon;
