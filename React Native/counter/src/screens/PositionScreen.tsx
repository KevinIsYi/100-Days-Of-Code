/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */

import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMoarada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300

    },
    cajaMoarada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white'
    }
});
