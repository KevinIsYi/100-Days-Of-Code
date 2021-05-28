/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 50,
                fontWeight: 'bold',
            }}>
                Hello World!
            </Text>
        </View>
    );
};

export default App;
