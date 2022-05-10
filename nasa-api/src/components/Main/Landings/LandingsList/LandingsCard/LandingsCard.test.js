import React from "react";
import { shallow } from "enzyme";
import LandingsCard from "./LandingsCard";

describe("LandingsCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
