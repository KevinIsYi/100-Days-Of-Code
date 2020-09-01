import React from 'react';
import "@testing-library/jest-dom";
import CounterApp from '../CounterApp';
import { shallow } from "enzyme";

describe("counterApp test", () => {
    test("Must show <CounterApp/> correctly", () => {
        const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test("Must show default value", () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>); 
        const fromSnapShot = wrapper.find("h2").text();

        expect(value).toBe(value);
    });
});