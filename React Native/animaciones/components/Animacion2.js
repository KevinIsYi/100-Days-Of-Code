import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';

export const Animacion2 = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450, // irá de 0 a 1
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
    }, []);

    return(
        <>
        <Animated.View
            style={
            [ styles.caja,
                {
                    width: animacion,
                }
            ]
            }
        >
        </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});