import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export const Animacion4 = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 360, // irá de 0 a 1
                duration: 5000,
                useNativeDriver: true
            }
        ).start();
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [ 0, 360 ], // Valores de entrada (0 a 360) números intermedios se generan automáticamente
        outputRange: [ '0deg', '360deg' ]
    });

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return(
        <Animated.View style={ [styles.caja, estiloAnimacion] }>

        </Animated.View>

    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});