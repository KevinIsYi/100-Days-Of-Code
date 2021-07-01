import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { styles } from '../theme/appTheme';
// import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Setings"
//                 component={SettingsScreen}
//             />
//         </Stack.Navigator>
//     );
// }

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <InnerMenu {...props} />}
        >
            <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={Tabs} />
            <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const InnerMenu = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >
                <Image
                    source={{
                        uri: "https://lh3.googleusercontent.com/proxy/Y5c6EBm2jDqg4aTO1DUaP3SoK4asi04t5M5WZ2u0OwCbVtJnqOF__CgbFEcZijgCD87UwyzTaGLEI1lxpXpfy-d6EkxafALsu_-PBbFlVCjJIR6JEkRuTLqD15M1EuHJhRXHmSg1JhPWuqzluIWDy-TArwJHAGP7-Fp7VuFbRcYzNDZXiXvbCj7331v6O16AUr115zRZqH7AVfZIq_AkT2M2kWNhYp6tRFyVjg"
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.menuItem}>Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
