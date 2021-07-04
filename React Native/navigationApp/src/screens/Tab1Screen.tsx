import React from 'react'
import { useEffect } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log("Holi");
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Íconos</Text>
            <Text>
                <TouchableIcon name="airplane-outline" />
                <TouchableIcon name="attach-outline" />
                <TouchableIcon name="bonfire-outline" />
                <TouchableIcon name="calculator-outline" />
                <TouchableIcon name="chatbubble-ellipses-outline" />
                <TouchableIcon name="images-outline" />
                <TouchableIcon name="leaf-outline" />
            </Text>
        </View>
    )
}
