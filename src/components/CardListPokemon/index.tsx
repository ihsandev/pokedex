import React from "react";
import { Icon } from "../../components";
import { Wrapper, ImageView, MainWrapper, Number, Delete } from "./styled";

export interface PropsCard extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  src?: string;
  id?: any;
  isDelete?: boolean;
  onDelete?: any;
}
const CardListPokemon: React.FC<PropsCard> = ({
  name,
  src,
  id,
  isDelete,
  onDelete,
  ...props
}) => {
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
      {isDelete ? (
        <Delete onClick={onDelete}>
          <Icon name="ri-delete-bin-2-line" size={30} color="red" />
        </Delete>
      ) : (
        <Number>#{id < 10 ? `0${id}` : id}</Number>
      )}
    </MainWrapper>
  );
};

export default CardListPokemon;
