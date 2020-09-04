import React from 'react';
import ReactDOM from 'react-dom'
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';

ReactDOM.render (
    <CounterCustomHook />,
    document.getElementById('root')
);