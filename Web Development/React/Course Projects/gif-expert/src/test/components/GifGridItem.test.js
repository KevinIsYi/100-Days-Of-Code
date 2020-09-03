import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("Test on <GifGridItem>", () => {

    const url = "https//gdsgdsdjkgjkds.com"
    const wrapper = shallow(<GifGridItem url={url}/>);
    test("Must match snapshot", () => {
        

        expect(wrapper).toMatchSnapshot();
    });

    test("url must match with what is send", () => {
        const img = wrapper.find("img");

        expect(img.prop("src")).toBe(url);
    });

    test("classes in div must be animate__fadeInLeft", () => {
        const img = wrapper.find("img");

        //console.log(img.props());
        expect(img.prop("className")).toBe("animate__fadeInLeft");
    });
});