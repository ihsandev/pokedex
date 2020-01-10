import React from "react";
import { Pokemon, DetailPokemon } from "../../containers";

const routes = [
  {
    path: "/home",
    component: <Pokemon />,
    exact: true
  },
  {
    path: "/pokemon/detail/:name",
    component: <DetailPokemon />,
    exact: true
  }
];

export default routes;
