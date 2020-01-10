import React from "react";
import { Tags } from "../../../components";
import { More, Moredetail, TitleMore } from "../styled";

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
          <span>Weakness</span>
          <Tags color="grass">Grass</Tags>
        </div>
        <div>
          <span>Resistant</span>
          <Tags color="poison">Poison</Tags>
        </div>
      </Moredetail>
    </>
  );
};

export default MoreDetail;
