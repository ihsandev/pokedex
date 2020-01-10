import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../config/api";
import { TitleMore } from "../styled";
import { CardListPokemon } from "../../../components";

export interface Props {
  id?: string;
}
const Evolution: React.FC<Props> = ({ id }) => {
  const [evolution, setEvolution] = useState([]);

  const getEvolution = () => {
    let url = `${HOST}/evolution-chain/${id}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          setEvolution(res.data.chain.evolves_to);
          resolve(res.data.chain.evolves_to);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    getEvolution();
  }, [id]);

  return (
    <div>
      <TitleMore>Evolution</TitleMore>
      <div>
        {evolution &&
          evolution.map((item: any, i: number) => {
            return (
              <CardListPokemon
                // onClick={() => handleDetail(item.url)}
                key={i}
                name={item.species.name}
                src={`https://img.pokemondb.net/artwork/${item.species.name}.jpg`}
                loading={true}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Evolution;
