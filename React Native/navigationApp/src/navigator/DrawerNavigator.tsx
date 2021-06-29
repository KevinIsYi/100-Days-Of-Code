import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={width >= 500 ? 'permanent' : 'front'}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}