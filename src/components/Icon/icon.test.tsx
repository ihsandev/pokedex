import * as React from "react";
import { shallow } from "enzyme";
import Icon from "./index";

test("render Icon with props", () => {
  const wrapper = shallow(
    <Icon name="ri-delete-bin-2-line" color="red" size={30} />
  );
  expect(wrapper).toMatchSnapshot();
});
