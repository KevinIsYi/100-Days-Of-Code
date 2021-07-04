import React from 'react'
import { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

    const { signIn, authState: { isLoggedIn } } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>
            {
                !isLoggedIn && (
                    <Button
                        title="Sign In"
                        onPress={signIn}
                    />
                )
            }
        </View>
    )
}
