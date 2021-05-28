/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Platform } from 'react-native';

interface Props {
    position?: 'br' | 'bl'
    title: string,
    onPress: () => void,
}

export const Fab = ({ position = 'br', title, onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75} // Value between 0 (light) and 1 (bold)
                style={[
                    styles.fabLocation,
                    position === 'bl' ? styles.left : styles.right,
                ]}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View style={[
                styles.fabLocation,
                position === 'bl' ? styles.left : styles.right,
            ]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return Platform.OS === 'ios' ? ios() : android();

};

const styles = StyleSheet.create({
    fabLocation: {
        bottom: 30,
        position: 'absolute',
    },
    left: {
        left: 30,
    },
    right: {
        right: 30,
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        elevation: 14,
        height: 60,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        width: 60,
    },
    fabText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
