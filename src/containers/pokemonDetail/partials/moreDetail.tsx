import React from "react";
import { Tags } from "../../../components";
import { Moredetail, TitleMore, Moves } from "../styled";

export interface Props {
  detail?: any;
  types?: string;
}
const MoreDetail: React.FC<Props> = ({ detail, types }) => {
  return (
    <>
      <TitleMore>More Information</TitleMore>
      <Moredetail>
        <div>
          <span>Base Experience</span>
          <span>{detail.base_experience}</span>
        </div>
        <div className="abilities">
          <span>Abilities</span>
          <div>
            {detail.abilities &&
              detail.abilities.map((item: any, i: number) => {
                return (
                  <Tags color={types} key={i}>
                    {item.ability.name}
                  </Tags>
                );
              })}
          </div>
        </div>
        <div>
          <span>Types</span>
          {detail.types &&
            detail.types.map((item: any, i: number) => {
              return (
                <Tags key={i} color={item.type.name}>
                  {item.type.name}
                </Tags>
              );
            })}
        </div>
        <div className="moves">
          <span>Moves</span>
          <Moves>
            {detail.moves &&
              detail.moves.map((item: any, i: number) => {
                return (
                  <Tags key={i} color={types}>
                    {item.move.name}
                  </Tags>
                );
              })}
          </Moves>
        </div>
      </Moredetail>
    </>
  );
};

export default MoreDetail;
