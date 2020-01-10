import React from "react";
import { Tags } from "../../../components";
import { Box, BodyDetail, HeadDetail, PokemonImage } from "../styled";

export interface Props {
  detail?: any;
  types?: string;
}
const HeadLine: React.FC<Props> = ({ detail, types }) => {
  return (
    <Box color={types}>
      <div>
        <BodyDetail>
          <HeadDetail>
            <h2>{detail.name}</h2>
            <div>
              {detail.types &&
                detail.types.map((item: any, i: number) => {
                  return (
                    <Tags
                      key={i}
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      {item.type.name}
                    </Tags>
                  );
                })}
            </div>
          </HeadDetail>
          <div className="descript">
            <div>
              <span>Species</span>
              <span>{detail.species && detail.species.name}</span>
            </div>
            <div>
              <span>Height</span>
              <span>{detail.height}</span>
            </div>
            <div>
              <span>Weight</span>
              <span>{detail.weight}</span>
            </div>
          </div>
        </BodyDetail>
        <PokemonImage color={types}>
          <img
            src={`https://img.pokemondb.net/artwork/${detail.name}.jpg`}
            alt="pokemonImage"
          />
        </PokemonImage>
      </div>
    </Box>
  );
};

export default HeadLine;
