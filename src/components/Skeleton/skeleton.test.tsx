import * as React from "react";
import { shallow } from "enzyme";
import Skeleton from "./index";

test("render Skeleton with props", () => {
  const wrapper = shallow(
    <Skeleton.Line width={40} height={40} mt={2} mb={2} mr={2} ml={2} />
  );
  expect(wrapper).toMatchSnapshot();
});
