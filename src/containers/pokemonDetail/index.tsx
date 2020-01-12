import React, { useState, useEffect } from "react";
import { GET_POKEMON } from "../../config/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts";
import { Button } from "../../components";
import { More } from "./styled";
import HeadLine from "./partials/headLine";
import MoreDetail from "./partials/moreDetail";
import Evolution from "./partials/evolution";

const DetailPokemon: React.FC = () => {
  const [detail, setDetail] = useState<any>([]);
  const [types, setTypes] = useState("");

  const { name } = useParams();

  const getDetail = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${GET_POKEMON}/${name}`)
        .then(res => {
          const { data } = res;
          resolve(data);
          setDetail(data);
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
    getDetail();
  }, [name]);

  return (
    <MainLayout>
      {Object.keys(detail) && (
        <>
          <HeadLine detail={detail} types={types} />
          <More>
            <MoreDetail detail={detail} types={types} />
            <Evolution id={detail.id} />
          </More>
        </>
      )}
    </MainLayout>
  );
};

export default DetailPokemon;
