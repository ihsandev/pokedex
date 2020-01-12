import * as React from "react";
import { shallow } from "enzyme";
import Button from "./index";

test("render Button without props", () => {
  const wrapper = shallow(<Button>Test</Button>);
  expect(wrapper).toMatchSnapshot();
});

test("render Button with props", () => {
  const wrapper = shallow(
    <Button top={20} bottom={20} color="grass">
      Test
    </Button>
  );
  expect(wrapper).toMatchSnapshot();
});
