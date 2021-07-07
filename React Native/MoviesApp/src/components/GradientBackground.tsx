import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { usedFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {

    const { opacity, fadeIn, fadeOut } = usedFade();
    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    const { primary: primaryNew, secondary: secondaryNew } = colors;
    const { primary, secondary } = prevColors;

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut();
        });
    }, [colors]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[primary, secondary, "white"]}
                style={{
                    ...StyleSheet.absoluteFillObject
                }}
                start={{
                    x: 0.1,
                    y: 0.1
                }}
                end={{ x: 0.5, y: 0.75 }}
            />
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient
                    colors={[primaryNew, secondaryNew, "white"]}
                    style={{
                        ...StyleSheet.absoluteFillObject
                    }}
                    start={{
                        x: 0.1,
                        y: 0.1
                    }}
                    end={{ x: 0.5, y: 0.75 }}
                />
            </Animated.View>
            {children}
        </View>
    )
}
