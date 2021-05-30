/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { CounterScreen } from './src/screens/CounterScreen';
//import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* <HelloWorldScreen />
            <CounterScreen /> */}
            {/* <BoxObjectModelScreen /> */}
            <DimensionesScreen />
        </SafeAreaView>
    );
};

export default App;
