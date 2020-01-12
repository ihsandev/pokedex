import { Pokemon, DetailPokemon, MyListPokemon } from "../../containers";

const routes = [
  {
    path: "/home",
    component: Pokemon,
    exact: true
  },
  {
    path: "/pokemon/detail/:name",
    component: DetailPokemon,
    exact: true
  },
  {
    path: "/my-list",
    component: MyListPokemon,
    exact: true
  }
];

export default routes;
