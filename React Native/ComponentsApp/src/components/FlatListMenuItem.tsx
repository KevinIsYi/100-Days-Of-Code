import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem;
}


export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { name, icon, component } = menuItem;
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate(component)}
        >
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Icon
                        name={icon}
                        color="gray"
                        size={30}
                    />
                    <Text style={styles.itemText}>{name}</Text>
                </View>
                <Icon
                    name="chevron-forward-outline"
                    color="gray"
                    size={30}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18
    }
});