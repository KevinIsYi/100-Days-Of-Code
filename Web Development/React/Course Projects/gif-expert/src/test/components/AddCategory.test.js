import React from 'react';
import {AddCategory} from "../../components/AddCategory";
const { shallow } = require("enzyme")

describe ("Test on <AddCategory", () => {

    const setCategory = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategory}/>);
    
    test ("Must show correctly", () => {

        expect(wrapper).toMatchSnapshot();
    });
    test("text in textbox must change", () => {
        const input = wrapper.find("input");
        const value = "Hello World!";

        input.simulate("change", {
            target: {
                value: value
        }});

        expect(wrapper.find("p").text().trim()).toBe(value);
    })
});