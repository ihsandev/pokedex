import * as React from "react";
import { shallow } from "enzyme";
import CardListPokemon from "./index";

test("render CardList without props", () => {
  const wrapper = shallow(<CardListPokemon />);
  expect(wrapper).toMatchSnapshot();
});

test("render CardList with props", () => {
  const wrapper = shallow(
    <CardListPokemon
      name="Bulbasaur"
      id={1}
      src="https://img.pokemondb.net/artwork/bulbasaur.jpg"
      onDelete={() => console.log("deleted")}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
