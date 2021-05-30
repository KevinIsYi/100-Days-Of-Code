/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    caja1: {
        // flex: 1,
        // alignSelf: 'center',
        borderWidth: 2,
        borderColor: "white",
        fontSize: 30,
    },
    caja2: {
        // flex: 1,
        // alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: "white",
        fontSize: 30
    },
    caja3: {
        // flex: 2,
        // alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: "white",
        fontSize: 30
    },
});