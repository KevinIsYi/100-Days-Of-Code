import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {

    return (
        <NavigationContainer>
            <AppState>
                <MenuLateral />
                {/* <Tabs /> */}
            </AppState>
        </NavigationContainer>
    );
};

const AppState = ({ children }: { children: JSX.Element }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default App;
