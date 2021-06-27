import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const Screen2 = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hello World!',
            headerBackTitle: '' // Will write default go back text
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Screen #2</Text>

            <Button 
                title="Screen 3"
                onPress={() => navigator.navigate('Screen3')}
            />
        </View>
    )
}
