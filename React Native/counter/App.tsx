/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
//import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { CounterScreen } from './src/screens/CounterScreen';
//import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* <HelloWorldScreen />
            <CounterScreen /> */}
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionesScreen /> */}
            {/* <PositionScreen /> */}
            {/* <FlexScreen /> */}
            <TareaScreen />
        </SafeAreaView>
    );
};

export default App;
