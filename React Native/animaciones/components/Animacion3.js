import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export const Animacion3 = () => {

    const [ animacion ] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 40, // irá de 0 a 1
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
    }, []);

    return(
        <View>
            <Animated.Text style={ [styles.texto, { fontSize: animacion }] }>
                Animacion 3
            </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});