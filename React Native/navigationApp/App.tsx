import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    Text,
} from 'react-native';

const App = () => {

    return (
        <NavigationContainer>
            <SafeAreaView>
                <Text>Holi</Text>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
