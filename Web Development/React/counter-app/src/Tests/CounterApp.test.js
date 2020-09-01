import React from 'react';
import "@testing-library/jest-dom";
import CounterApp from '../CounterApp';
import { shallow } from "enzyme";

describe("counterApp test", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test("Must show <CounterApp/> correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("Must show default value", () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const fromSnapShot = wrapper.find("h2").text();

        expect(value).toBe(value);
    });
    test("Counter must increment when click +", () => {
        const btn = wrapper.find("button").at(0).simulate("click");
        const fromSnapShot = wrapper.find("h2").text();
        expect(fromSnapShot).toBe("101");
    });
    test("Counter must decrement when click -", () => {

        const btn = wrapper.find("button").at(2).simulate("click");
        const fromSnapShot = wrapper.find("h2").text();
        expect(fromSnapShot).toBe("99");
    });
    test("Reset button", () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        
        for (let i = 0 ; i < 5 ; ++i) {
            wrapper.find("button").at(2).simulate("click");
        }
        const btn = wrapper.find("button").at(1).simulate("click");
        const fromSnapShot = wrapper.find("h2").text();
        expect(fromSnapShot).toBe(String(value));
    });
});