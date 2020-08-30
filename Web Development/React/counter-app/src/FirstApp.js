//import React, {Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//Functional components
//const FirstApp = ({greeting, subtittle}) => {
const FirstApp = ({greeting, subtittle}) => {


    return (
        <>
            <h1>{greeting}</h1>
            <p>{subtittle}</p>
        </>
    );

    /*
    return (
        // <div>
        //     <h1>Hello World!</h1>
        //     <p>Parragraph</p>
        // </div>
        <>
            <h1>Hello World!</h1>
            <p>Parragraph</p>
        </>
        // <Fragment>
        //     <h1>Hello World!</h1>
        //     <p>Parragraph</p>
        // </Fragment>
    );
    */
}

/*
FirstApp.propTypes = {
    greeting: PropTypes.string
}
*/

FirstApp.propTypes = {
    greeting: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    subtittle: "SUBTITTLE"
}


export default FirstApp;