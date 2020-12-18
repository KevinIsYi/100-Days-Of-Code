import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Cotizacion = ({ resultado }) => {
    
    if (Object.keys(resultado).length === 0) {
        return null;
    }

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
    
    return (
        <View style={ styles.resultado }>
            <Text style={ [styles.texto, styles.precio] }>
                <Text style={ styles.span }>{ PRICE }</Text>
            </Text>
            <Text style={ styles.texto }>Precio más alto del día: {' '}
                <Text style={ styles.span }>{ HIGHDAY }</Text>
            </Text>
            <Text style={ styles.texto }>Precio más bajo del día: {' '}
                <Text style={ styles.span }>{ LOWDAY }</Text>
            </Text>
            <Text style={ styles.texto }>Variacíon últimas 24 horas: {' '}
                <Text style={ styles.span }>{ CHANGEPCT24HOUR }</Text>
            </Text>
            <Text style={ styles.texto }>Última Actualización: {' '}
                <Text style={ styles.span }>{ LASTUPDATE }</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    }
})