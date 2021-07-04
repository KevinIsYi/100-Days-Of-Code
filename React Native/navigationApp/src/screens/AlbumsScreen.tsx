import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const { authState: { isLoggedIn }, logOut } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Albums Screen</Text>
            {
                isLoggedIn && (
                    <Button
                        title="Log Out"
                        onPress={logOut}
                    />
                )
            }
        </View>
    )
}
