import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; 

export const Header = () => (
    <Text style={ styles.encabezado }>Criptomonedas</Text>
)

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFF',
        marginBottom: 30   
    }
})

