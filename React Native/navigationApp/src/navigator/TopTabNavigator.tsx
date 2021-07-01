import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

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
                            iconName = 'chatbox-ellipses-outline';
                            break;
                        case 'ContactsScreen':
                            iconName = 'people-outline';
                            break;
                        case 'AlbumsScreen':
                            iconName = 'albums-outline';
                            break;
                        default:
                            iconName = '';
                    }
                    return (
                        <Icon name={iconName} size={20} color={color} />
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