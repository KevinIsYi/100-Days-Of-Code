import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';

interface Props extends StackScreenProps<any, any> { };

export const Screen3 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Screen #3</Text>

            <Button
                title="Go Back"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Go Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
