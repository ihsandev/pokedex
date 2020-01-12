import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts";
import { CardListPokemon, Skeleton } from "../../components";
import { GET_POKEMON } from "../../config/api";
import { Total, LoadingMore } from "./styled";
import QuickDetail from "./quickDetail";
import Loading from "./loading";
import axios from "axios";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(20);
  const [detailPokemon, setDetailPokemon] = useState(false);
  const [urlDetail, setUrlDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const getPokemon = () => {
    return new Promise((resolve, reject) => {
      let url = `${GET_POKEMON}?limit=${page}`;
      axios
        .get(url)
        .then(res => {
          const { count, results } = res.data;
          setPokemon(results);
          setTotal(count);
          resolve(results);
          resolve(count);
          setLoading(true);
          setLoadingMore(true);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    getPokemon();
  }, [page]);

  const handleDetail = (url: string) => {
    setUrlDetail(url);
    setDetailPokemon(true);
  };

  const handleScroll = () => {
    const element = document.documentElement;
    if (
      window.innerHeight + element.scrollTop === element.offsetHeight &&
      loadingMore
    ) {
      setPage(page + 20); // load more data
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <MainLayout>
      <QuickDetail
        urlDetail={urlDetail}
        detailPokemon={detailPokemon}
        setDetailPokemon={setDetailPokemon}
      />
      <Total>
        Total Owned:{" "}
        {loading ? (
          <span>{total} data</span>
        ) : (
          <span>
            <Skeleton.Line width={25} />
          </span>
        )}
      </Total>
      <div>
        {pokemon && pokemon.length > 0 ? (
          pokemon.map((item: any, i: number) => {
            return (
              <CardListPokemon
                onClick={() => handleDetail(item.url)}
                key={i}
                name={item.name}
                id={i + 1}
                src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}
              />
            );
          })
        ) : (
          <Loading />
        )}
        {loadingMore && (
          <LoadingMore>
            <Skeleton.Line width={80} height={80} />
            <Skeleton.Line height={20} />
          </LoadingMore>
        )}
      </div>
    </MainLayout>
  );
};

export default Pokemon;
