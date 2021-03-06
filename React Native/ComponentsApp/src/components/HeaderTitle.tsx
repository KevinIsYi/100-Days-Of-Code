import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme'

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginBottom: 20, marginTop: top + 20 }}>
            <Text style={{
                ...styles.title,
                color: "#5856D6"
            }}
            >
                {title}
            </Text>
        </View>
    )
}
