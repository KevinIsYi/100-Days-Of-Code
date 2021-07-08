import React from 'react';
import { Button } from 'react-native';
import { Animated, View } from 'react-native';
import { usedFade } from '../hooks/useFade';


export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = usedFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity
                }}
            />
            <Button
                title="Animate!"
                onPress={fadeIn}
            />
            <Button
                title="DeAnimate!"
                onPress={fadeOut}
            />
        </View>
    )
}