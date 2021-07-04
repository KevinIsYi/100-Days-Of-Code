import React from 'react';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext);
    const { favoriteIcon } = authState
    const { top } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: top + 20
            }}
        >
            <Text style={styles.title}>{JSON.stringify(authState, null, 4)}</Text>
            {
                favoriteIcon && (
                    <Icon name={favoriteIcon} color={colors.primary} size={150} />
                )
            }
        </View>
            )
}
