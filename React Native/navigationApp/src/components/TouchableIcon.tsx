import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string;
}

export const TouchableIcon = ({ name }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(name)}
        >
            <Icon
                name={name}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}
