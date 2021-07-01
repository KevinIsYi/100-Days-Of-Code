import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                pressColor: colors.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colors.primary
                },
                style: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                    shadowColor: 'transparent'
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, /*focused*/ }) => {
                    const { name } = route;
                    let iconName: string;

                    switch (name) {
                        case 'ChatScreen':
                            iconName = 'CH';
                            break;
                        case 'ContactsScreen':
                            iconName = 'CO';
                            break;
                        case 'AlbumsScreen':
                            iconName = 'AL';
                            break;
                        default:
                            iconName = '';
                    }
                    return (
                        <Text style={{ color}}>{iconName}</Text>
                    )
                }
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}