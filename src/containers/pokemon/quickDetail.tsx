import React, { useState, useEffect } from "react";
import { Modal, Tags, Button } from "../../components";
import { Link } from "react-router-dom";
import { HeadDetail, BodyDetail, PokemonImage } from "./styled";
import axios from "axios";

export interface Props {
  urlDetail: string;
  detailPokemon: boolean;
  setDetailPokemon: React.Dispatch<React.SetStateAction<boolean>>;
}
const QuickDetail: React.FC<Props> = ({
  urlDetail,
  detailPokemon,
  setDetailPokemon
}) => {
  const [data, setData] = useState<any>([]);
  const [types, setTypes] = useState("");
  const getDetail = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(urlDetail)
        .then(res => {
          const { data } = res;
          setData(data);
          resolve(data);
          const types =
            Object.keys(data) && data.types && data.types[0].type.name;
          setTypes(types);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    if (detailPokemon) {
      getDetail();
    }
  }, [urlDetail]);

  return (
    <>
      {Object.keys(data) && (
        <Modal
          height="465px"
          visible={detailPokemon}
          onClose={() => setDetailPokemon(false)}
          color={types}
        >
          <HeadDetail>
            <h2>{data.name}</h2>
            <div>
              {data.types &&
                data.types.map((item: any, i: number) => {
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

          <BodyDetail>
            <div className="descript">
              <div>
                <span>Species</span>
                <span>{data.species && data.species.name}</span>
              </div>
              <div>
                <span>Height</span>
                <span>{data.height}</span>
              </div>
              <div>
                <span>Weight</span>
                <span>{data.weight}</span>
              </div>
              <Link to={`/pokemon/detail/${data.name}`}>
                <Button color={types}>See Full Detail</Button>
              </Link>
            </div>
            <PokemonImage color={types}>
              <img
                src={`https://img.pokemondb.net/artwork/${data.name}.jpg`}
                alt="pokemonImage"
              />
            </PokemonImage>
          </BodyDetail>
        </Modal>
      )}
    </>
  );
};

export default QuickDetail;
