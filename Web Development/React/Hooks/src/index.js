import React from 'react';
import ReactDOM from 'react-dom'
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
import { LayoutEffect } from './components/05-useLayerEffect/LayoutEffect';

ReactDOM.render (
    <LayoutEffect />,
    document.getElementById('root')
);