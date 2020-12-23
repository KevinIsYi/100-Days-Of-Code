import React, { useState } from 'react';
import { StyleSheet, View, Animated, Text, TouchableWithoutFeedback } from 'react-native';

export const Animacion5 = () => {

    const [ animacion ] = useState(new Animated.Value(1));

    const presionarBoton = () => {
        Animated.spring(animacion, {
            toValue: .8,
            useNativeDriver: true
        }).start();
    }

    const soltarBoton = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 1, // Controla rebote, mientras m´sa bajo mayor el rebote
            tension: 10, //Menor número más suave el movimiento
            useNativeDriver: true
        }).start(); 
    }

    const estiloAnimacion = {
        transform: [
            {
                scale: animacion
            }
        ]
    };

    return(
        <View style={ styles.contenedor }> 
            <TouchableWithoutFeedback
                onPressIn={ presionarBoton }
                onPressOut={ soltarBoton }
            >
                <Animated.View style={ [styles.btn, estiloAnimacion] }>
                    <Text style={ styles.texto }>Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
});