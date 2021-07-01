import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {

    return (
        <NavigationContainer>
            <MenuLateral />
             {/* <Tabs /> */}
        </NavigationContainer>
    );
};

export default App;
