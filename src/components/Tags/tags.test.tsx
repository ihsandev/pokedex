import * as React from "react";
import { shallow } from "enzyme";
import Tags from "./index";

test("render Tags with props", () => {
  const wrapper = shallow(<Tags color="grass">Grass</Tags>);
  expect(wrapper).toMatchSnapshot();
});
