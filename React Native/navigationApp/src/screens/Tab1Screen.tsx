import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Tab1Screen = () => {

    useEffect(() => {
        console.log("Holi");
    }, []);

    return (

        <View style={styles.globalMargin}>
            <Text style={styles.title}>Íconos</Text>
            <Text>
                <Icon name="airplane-outline" size={50} color="#900" />
            </Text>
        </View>
    )
}
