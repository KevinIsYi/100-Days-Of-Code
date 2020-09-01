//import { render } from "@testing-library/react";
import FirstApp from "../FirstApp.js";
import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Test on <FirstApp />", () => {
    // test("Must be 'Hola, soy Kevin", () => {
    //     const greeting = "Hola, soy Kevin";
    //     const {getByText} = render(<FirstApp greeting={greeting} />);

    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test("must show <FirstApp /> correctly", () => {
        const greeting = "Hola, soy Kevin";
        const wrapper = shallow(<FirstApp greeting={greeting}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test("Must show subtittle", () => {
        const greeting = "Hola, soy Kevin";
        const wrapper = shallow(
            <FirstApp 
                greeting={greeting}
                subtittle="Subtittle"
            />
        );
        const textP = wrapper.find("p").text();
        expect(textP).toBe("SUBTITTLE");
    });
});