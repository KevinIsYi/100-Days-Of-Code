import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export const Animacion1 = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, // irá de 0 a 1
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }, []);

    return(
        <>
        <Animated.View
            style={{ opacity: animacion }}
        >
            <Text style={ styles.texto }>Animación 1</Text>
        </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});