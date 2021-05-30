/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */

import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#25C4D9',
    },
});
