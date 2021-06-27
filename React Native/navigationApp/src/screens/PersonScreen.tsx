import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number;
//     name: string;
// };

interface Props extends StackScreenProps<RootStackParams, "PersonScreen"> { };

export const PersonScreen = ({ navigation, route }: Props) => {

    // const { params } = route;
    // const { id, name } = params as RouteParams;

    const { params: { id, name } } = route;

    useEffect(() => {
        navigation.setOptions({
            title: name
        });
    }, []);

    return (
        <View>
            <Text style={styles.title}>{JSON.stringify({ id, name }, null, 4)}</Text>
        </View>
    )
}
