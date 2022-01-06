import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Card from "./components/card/Card";

configure({ adapter: new Adapter() });

describe("<Card />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Card />);
    });
    it("Renderiza 5 <div> con toda la ifo que le llega por porps adentro", () => {
      expect(wrapper.find("div")).toHaveLength(5);
    });

    it("Renderiza 1 <img>", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });

    it("Renderiza 2 <h3>", () => {
      expect(wrapper.find("h3")).toHaveLength(2);
    });

    it("Renderiza 6 <p>", () => {
      expect(wrapper.find("p")).toHaveLength(6);
    });
  });
});
