import React from 'react';
import { useRef } from 'react';
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() => {
            console.log("Termina, papu"); 
        });

        Animated.timing(
            top,
            {
                toValue: 100,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    opacity,
                    marginBottom: 20,
                    transform: [{
                        translateY: top
                    }]
                }}
            />
            <Button
                title="Fade In"
                onPress={fadeIn}
            />
            <Button
                title="Fade Out"
                onPress={fadeOut}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});