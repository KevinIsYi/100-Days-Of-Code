import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

/*
// Instalar react-navigation/native
npm install @react-navigation/native

// Instalar las dependencias

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// Instalar navegación en Stack

npm i @react-navigation/stack

// Si desarrollas una app para iOS 

cd ios/
pod install

// En Android android/app/build.gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

// en el App.js 
import 'react-native-gesture-handler';
*/

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App  = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'right',
            headerStyle: {
              backgroundColor: '#F4511E',
            
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
              name="Inicio"
              component={Inicio}
          />
          <Stack.Screen
              name="Nosotros"
              component={Nosotros}
              options={ ({route}) => ({
                title: route.params.clienteId
              }) }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
