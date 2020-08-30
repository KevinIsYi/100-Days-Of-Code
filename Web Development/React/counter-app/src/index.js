import React from 'react';
import ReactDOM from 'react-dom';
//import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import "./index.css";

const root = document.getElementById("root");

//ReactDOM.render(<FirstApp greeting="Hola, soy juancho"/>, root);
//ReactDOM.render(<FirstApp greeting={123}/>, root);
ReactDOM.render(<CounterApp value={1235}/>, root);