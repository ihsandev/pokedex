import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts";
import { Title } from "./styled";
import { CardListPokemon } from "../../components";

const MyList = () => {
  const [list, setList] = useState([]);
  const getMyList = () => {
    const list: any = window.localStorage.getItem("list");
    const parseList = JSON.parse(list);
    if (list === null) {
      return false;
    } else {
      setList(parseList);
    }
  };

  useEffect(() => {
    getMyList();
  }, []);
  return (
    <MainLayout>
      <Title>My List Pokemon</Title>
      <div>
        {list && list.length > 0 ? (
          list.map((item: any, i: number) => {
            return (
              <CardListPokemon
                key={i}
                name={item.nickName}
                id={i + 1}
                src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}
              />
            );
          })
        ) : (
          <div>List Pokemonmu Kosong !</div>
        )}
      </div>
    </MainLayout>
  );
};

export default MyList;
