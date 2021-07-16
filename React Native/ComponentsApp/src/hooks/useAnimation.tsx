import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

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
    }

    const startMovingPosition = (initialPosition: number, duration: number = 300) => {
        position.setValue(initialPosition);
        
        Animated.timing(
            position,
            {
                toValue: 100,
                duration,
                useNativeDriver: true,
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

    return {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosition
    };
}
