import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../config/api";
import { TitleMore, EvolutionCard } from "../styled";
import { Link } from "react-router-dom";
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
      {evolution && evolution.length > 0 ? (
        <TitleMore>Evolution</TitleMore>
      ) : null}
      <EvolutionCard>
        {evolution &&
          evolution.map((item: any, i: number) => {
            return (
              <Link key={i} to={`/pokemon/detail/${item.species.name}`}>
                <CardListPokemon
                  name={item.species.name}
                  src={`https://img.pokemondb.net/artwork/${item.species.name}.jpg`}
                  id={i + 1}
                />
              </Link>
            );
          })}
      </EvolutionCard>
    </div>
  );
};

export default Evolution;
