import React from "react";
import { Skeleton } from "../../components";
import { Wrapper, ImageView } from "./styled";

export interface PropsCard extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  src?: string;
  loading?: boolean;
}
const CardListPokemon: React.FC<PropsCard> = ({
  name,
  src,
  loading,
  ...props
}) => {
  return (
    <>
      <Wrapper {...props}>
        {loading ? (
          <ImageView>
            <img src={src} alt="pokemon" />
          </ImageView>
        ) : (
          <Skeleton.Line width={80} height={80} />
        )}
        <div>
          {loading ? (
            <h3>{name}</h3>
          ) : (
            <Skeleton.Line width={150} height={15} />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default CardListPokemon;
