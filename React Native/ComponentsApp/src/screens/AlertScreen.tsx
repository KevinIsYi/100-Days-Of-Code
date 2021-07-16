import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "Alert Body",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "YES", onPress: () => console.log("YES Pressed") },
            ],
            {
                cancelable: true, // Close alert when clicking outside
                onDismiss: () => console.log("On Dismiss")
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Show Alert"
                onPress={showAlert}
            />
        </View>
    )
}
